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
  grid-template-columns: 20rem auto;
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

button.current,
li.current {
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
  z-index: 3;
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
  width: 20rem;
  z-index: 2;
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
  gap: .25rem;
  justify-content: space-between;
  width: 100%;
}

.project-item {
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
  border-radius: 6px;
  padding: 2px 0px;
}

.project-button {
  background-color: rgb(0, 0, 0, .0);
  color: #fff;
  width: 100%;

  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 0 .75rem 8px;
  border-radius: 6px;
  border: none;
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
}


/* MORE OPTIONS BUTTON */

.more-options-menu {
  position: relative;
  display: none;
}

.more-options-toggle {
  background: none;
  border: none;
  font-size: 13px; /* size of the dots */
  letter-spacing: 2px;
  cursor: pointer;
  color: #a1a1a1;
  height: 2rem;
}

.more-options-toggle:hover {
  color: #fff;
}

.more-options-content {
  display: none; 
  position: absolute;
  background-color: #333333;
  border-radius: 6px;
  border: 1px solid #444444;
  min-width: 7rem;
  padding: .5rem;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.more-options-content.show {
  display: block;
}

.show {
  display: block;
}

#rename-option,
#delete-option {
  color: #fff;
  padding: .75rem 1.5rem;
  text-decoration: none;
  display: block;
  width: 100%;
  background-color: rgb(0, 0, 0, .0);
  border: none;
  border-radius: 4px;
  text-align: left;
}

#rename-option:hover,
#delete-option:hover {
  background-color: #3b3b3b;

}

/* Hide default arrow for dropdown */
.dropdown-toggle::-ms-expand {
  display: none;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 20rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\nbutton.current,\nli.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 3;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 20rem;\n  z-index: 2;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 2rem;\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  gap: .25rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: .5rem;\n  border-radius: 6px;\n  padding: 2px 0px;\n}\n\n.project-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  padding: .75rem 0 .75rem 8px;\n  border-radius: 6px;\n  border: none;\n}\n\n.project-item:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n.delete-btn {\n  margin-left: .5rem;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn,\n.save-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn,\n.save-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date,\n#edit-due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.add-project-modal-title {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.add-project-to-list {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.edit-form-container {\n  height: auto;\n  width: 600px;\n}\n\n.edit-form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\n.edit-form-footer {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n\n/* MORE OPTIONS BUTTON */\n\n.more-options-menu {\n  position: relative;\n  display: none;\n}\n\n.more-options-toggle {\n  background: none;\n  border: none;\n  font-size: 13px; /* size of the dots */\n  letter-spacing: 2px;\n  cursor: pointer;\n  color: #a1a1a1;\n  height: 2rem;\n}\n\n.more-options-toggle:hover {\n  color: #fff;\n}\n\n.more-options-content {\n  display: none; \n  position: absolute;\n  background-color: #333333;\n  border-radius: 6px;\n  border: 1px solid #444444;\n  min-width: 7rem;\n  padding: .5rem;\n  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.more-options-content.show {\n  display: block;\n}\n\n.show {\n  display: block;\n}\n\n#rename-option,\n#delete-option {\n  color: #fff;\n  padding: .75rem 1.5rem;\n  text-decoration: none;\n  display: block;\n  width: 100%;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  text-align: left;\n}\n\n#rename-option:hover,\n#delete-option:hover {\n  background-color: #3b3b3b;\n\n}\n\n/* Hide default arrow for dropdown */\n.dropdown-toggle::-ms-expand {\n  display: none;\n}\n\n\n"],"sourceRoot":""}]);
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



// Initial state for category view
let currentCategoryViewId = 'inbox';

// Initial state for whether completed tasks are shown
let showCompletedTasks = false;


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

      const moreOptionsMenu = createMoreOptionsMenu(category.id);
      
      const textNode = document.createTextNode(category.title);
      categoryItemButton.appendChild(textNode);
      li.append(categoryItemButton, moreOptionsMenu);
      projectList.appendChild(li);
    }
  });
}


function createMoreOptionsMenu(categoryId) {
  const moreOptionsMenu = document.createElement('div');
  moreOptionsMenu.classList.add('more-options-menu');
  moreOptionsMenu.dataset.categoryId = categoryId;

  const moreOptionsToggle = document.createElement('button');
  moreOptionsToggle.classList.add('more-options-toggle');
  moreOptionsToggle.textContent = '•••'

  const moreOptionsContent = document.createElement('div');
  moreOptionsContent.classList.add('more-options-content');

  const renameOption = document.createElement('button');
  renameOption.setAttribute('id', 'rename-option');
  renameOption.dataset.categoryId = categoryId;
  renameOption.textContent = 'Rename';

  const deleteOption = document.createElement('button');
  deleteOption.setAttribute('id', 'delete-option');
  deleteOption.dataset.categoryId = categoryId;
  deleteOption.textContent = 'Delete';

  moreOptionsContent.append(renameOption, deleteOption);
  moreOptionsMenu.append(moreOptionsToggle, moreOptionsContent);

  // Event listener to toggle the menu
  moreOptionsToggle.addEventListener('click', () => {
    moreOptionsContent.classList.toggle('show');
  });

  // Event listener to close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!moreOptionsMenu.contains(event.target) && !moreOptionsToggle.contains(event.target)) {
      moreOptionsContent.classList.remove('show');
    }
  }, true);

  return moreOptionsMenu;
}


function handleInboxCategoryClick() {
  const inboxOptionElement = document.querySelector('.inbox-button');
  inboxOptionElement.addEventListener('click', () => {
    const categoryId = inboxOptionElement.dataset.categoryId;
    const category = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.find(category => category.id === categoryId);
    const categoryHeaderTitle = document.querySelector('.category-title');

    if (currentCategoryViewId !== categoryId) {
      currentCategoryViewId = categoryId;
      categoryHeaderTitle.textContent = category.title;

      // document.querySelectorAll('.project-button').forEach(button => {
      //   button.classList.remove('current');
      // });

      document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('current');
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

        document.querySelectorAll('.project-item').forEach(item => {
          item.classList.remove('current');
        });

        // Handle more options dropdown menu
        document.querySelectorAll('.more-options-menu').forEach(dropdown => {
          dropdown.classList.remove('show');
        });

        const moreOptionsMenu = document.querySelector(`.more-options-menu[data-category-id='${categoryId}']`);
        moreOptionsMenu.classList.add('show');
        

        // document.querySelector('.project-item').classList.remove('current');
        document.querySelector('.inbox-button').classList.remove('current');

        const projectLi = document.querySelector(`.project-item[data-category-id='${categoryId}']`);
        projectLi.classList.add('current');
        // event.target.classList.add('current');

        // Close the create task form
        const createTaskFormElement = document.querySelector('.form-container');
        const addTaskButton = document.querySelector('.add-task-btn');
        if (getComputedStyle(createTaskFormElement).display !== 'flex') {
          createTaskFormElement.style.display = 'none';
          addTaskButton.style.display = 'flex';
          clearFormFields();
        } 
        
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
  checkBoxDiv.classList.add('checkbox-wrapper');
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
    editButton = createTaskButton('Edit', 'edit-btn', task.id);  
  }              
  const deleteButton = createTaskButton('Delete', 'delete-btn', task.id);                
  
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


function createTaskButton(text, className, taskId) {
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
    const selectedCategoryId = form.querySelector('.project-drop-down').value;
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

    if (currentCategoryViewId === selectedCategoryId) {
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(currentCategoryViewId, taskId, updates);      
    } else if (currentCategoryViewId !== selectedCategoryId) {
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromCategory)(currentCategoryViewId, taskId);
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(selectedCategoryId, title, description, dueDate, priority);
    }
    
    editTaskDialog.close();
    clearFormFields();    
    renderTasks(currentCategoryViewId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTyx5RkFBeUYsWUFBWSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFL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Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrU2VydmljZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlLmNzcyAqL1xuXG5cbi8qIEdMT0JBTCAqL1xuXG4qIHtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0eWVsbG93OyAqL1xuICBtYXJnaW46IDA7XG5cbn1cblxuI2dyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTAwdmg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogI0UyRTJFMjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLmN1cnJlbnQsXG5saS5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cblxuXG4vKiBUT1AgQkFSICovXG4udG9wLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHotaW5kZXg6IDM7XG59XG5cbi50b3AtYmFyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuLmhvbWUtYnRuLFxuLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogLjI1cmVtO1xufVxuXG4uaG9tZS1idG46aG92ZXIsXG4ubWVudS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogTEVGVCBNRU5VICovXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDhweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcbiAgd2lkdGg6IDIwcmVtO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubGVmdC1tZW51LXdyYXBwZXIge1xuICBtYXJnaW46IDIuNXJlbSAxLjVyZW0gMCAycmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmluYm94LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG59XG5cbi5pbmJveC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAuMjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtIDAgLjc1cmVtIDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogTUFJTiAqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBtYXJnaW46IDNyZW0gYXV0bztcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xufVxuXG5cbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG59XG5cbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogLjc1cmVtIDAgLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2stdGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVja2JveC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG59XG5cbi5jaGVja2JveC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja21hcmstaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbn1cblxuLmNoZWNrYm94LWJ0biAuY2hlY2ttYXJrLWljb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jaGVja2JveC1idG46aG92ZXIgLmNoZWNrbWFyay1pY29uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNoZWNrYm94LWJ0bi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNoZWNrbWFyay1pY29uLmNoZWNrZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuXG4udGl0bGUuY2hlY2tlZCB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICBjb2xvcjogIzhmOGY4ZjtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kdWUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cblxuXG5cblxuLyogRk9STSAqL1xuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybS1jb250YWluZXI+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tb3B0aW9ucyB7XG4gIG1hcmdpbjogLjVyZW0gMDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgcGFkZGluZzogLjc1cmVtIDA7XG59XG5cbi5jYW5jZWwtYnRuLFxuLnN1Ym1pdC1idG4sXG4uc2F2ZS1idG4ge1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnRuLFxuLnNhdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNkdWUtZGF0ZSxcbiNlZGl0LWR1ZS1kYXRlIHtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgZmlsdGVyOiBpbnZlcnQoNDUlKSBodWUtcm90YXRlKDE4MGRlZyk7XG59XG5cblxuXG5cbi8qIE1PREFMICovXG5cbmRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDEwcmVtIGF1dG87XG59XG5cbiNwcm9qZWN0LXRpdGxlLWlucHV0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2IzYjNiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY3JlYXRlLXByb2plY3QtZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYWRkLXByb2plY3QtbW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmNsb3NlLW1vZGFsLWJ0bixcbi5hZGQtcHJvamVjdC10by1saXN0IHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuXG5cblxuLyogVVBEQVRFIFRBU0sgTU9EQUwgKi9cblxuLmVkaXQtZm9ybS1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmVkaXQtZm9ybS1jb250YWluZXI+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lZGl0LWZvcm0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgcGFkZGluZzogLjc1cmVtIDA7XG59XG5cblxuLyogTU9SRSBPUFRJT05TIEJVVFRPTiAqL1xuXG4ubW9yZS1vcHRpb25zLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb3JlLW9wdGlvbnMtdG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEzcHg7IC8qIHNpemUgb2YgdGhlIGRvdHMgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ExYTFhMTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4ubW9yZS1vcHRpb25zLXRvZ2dsZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9yZS1vcHRpb25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lOyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XG4gIG1pbi13aWR0aDogN3JlbTtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tb3JlLW9wdGlvbnMtY29udGVudC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNyZW5hbWUtb3B0aW9uLFxuI2RlbGV0ZS1vcHRpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jcmVuYW1lLW9wdGlvbjpob3ZlcixcbiNkZWxldGUtb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcblxufVxuXG4vKiBIaWRlIGRlZmF1bHQgYXJyb3cgZm9yIGRyb3Bkb3duICovXG4uZHJvcGRvd24tdG9nZ2xlOjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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QUNiLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COzs7QUFHQSx3QkFBd0I7O0FBRXhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZSxFQUFFLHFCQUFxQjtFQUN0QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5Qjs7QUFFM0I7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNyYy9zdHlsZS5jc3MgKi9cXG5cXG5cXG4vKiBHTE9CQUwgKi9cXG5cXG4qIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodHllbGxvdzsgKi9cXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuXFxuI2dyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6ICNFMkUyRTI7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuXFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuLmJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24uY3VycmVudCxcXG5saS5jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxufVxcblxcblxcbi8qIFRPUCBCQVIgKi9cXG4udG9wLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi50b3AtYmFyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcbi5ob21lLWJ0bixcXG4ubWVudS1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXG59XFxuXFxuLmhvbWUtYnRuOmhvdmVyLFxcbi5tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLyogTEVGVCBNRU5VICovXFxuLmxlZnQtbWVudS1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNDhweDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XFxuICB3aWR0aDogMjByZW07XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubGVmdC1tZW51LXdyYXBwZXIge1xcbiAgbWFyZ2luOiAyLjVyZW0gMS41cmVtIDAgMnJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmluYm94LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmluYm94LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogLjI1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwIC43NXJlbSA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBNQUlOICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XFxufVxcblxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stdGl0bGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja21hcmstaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zcHg7XFxuICByaWdodDogLTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biAuY2hlY2ttYXJrLWljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja21hcmstaWNvbi5jaGVja2VkIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi50aXRsZS5jaGVja2VkIHtcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICBjb2xvcjogIzhmOGY4ZjtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIEZPUk0gKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybS1vcHRpb25zIHtcXG4gIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5zdWJtaXQtYnRuLFxcbi5zYXZlLWJ0biB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idG4sXFxuLnNhdmUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XFxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jZHVlLWRhdGUsXFxuI2VkaXQtZHVlLWRhdGUge1xcbiAgcGFkZGluZzogMCAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBNT0RBTCAqL1xcblxcbmRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtbW9kYWwtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwtYnRuLFxcbi5hZGQtcHJvamVjdC10by1saXN0IHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuXFxuXFxuLyogVVBEQVRFIFRBU0sgTU9EQUwgKi9cXG5cXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5lZGl0LWZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0LWZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbn1cXG5cXG5cXG4vKiBNT1JFIE9QVElPTlMgQlVUVE9OICovXFxuXFxuLm1vcmUtb3B0aW9ucy1tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb3JlLW9wdGlvbnMtdG9nZ2xlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEzcHg7IC8qIHNpemUgb2YgdGhlIGRvdHMgKi9cXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ExYTFhMTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLm1vcmUtb3B0aW9ucy10b2dnbGU6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb3JlLW9wdGlvbnMtY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcbiAgbWluLXdpZHRoOiA3cmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vcmUtb3B0aW9ucy1jb250ZW50LnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jcmVuYW1lLW9wdGlvbixcXG4jZGVsZXRlLW9wdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNyZW5hbWUtb3B0aW9uOmhvdmVyLFxcbiNkZWxldGUtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxuXFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBhcnJvdyBmb3IgZHJvcGRvd24gKi9cXG4uZHJvcGRvd24tdG9nZ2xlOjotbXMtZXhwYW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIHNyYy90YXNrU2VydmljZS5qc1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuaW1wb3J0IHsgXG4gIGNhdGVnb3JpZXMsXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IFxuICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzLCBcbiAgY2xlYXJGb3JtRmllbGRzLCBcbiAgZGlzcGxheUFsbFRhc2tzLCBcbiAgZGlzcGxheVByb2plY3RzLFxuICByZW5kZXJJbmNvbXBsZXRlVGFza3MsXG59IGZyb20gXCIuL3Rhc2tWaWV3LmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKSB7XG4gIGNvbnN0IG5ld0NhdGVnb3J5ID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGFza3M6IFtdXG4gIH07XG5cbiAgY2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNhdGVnb3J5SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gJycsIHByaW9yaXR5ID0gJ2xvdycsIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGlzQ29tcGxldGU6IGlzQ29tcGxldGUsXG4gIH07XG4gIFxuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5LnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpOyAgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlJZCkge1xuICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkICE9PSBjYXRlZ29yeUlkKTtcbiAgY2F0ZWdvcmllcyA9IHVwZGF0ZWRDYXRlZ29yaWVzO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwgdGFza0lkKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gY2F0ZWdvcnkudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICBjYXRlZ29yeS50YXNrcyA9IHVwZGF0ZWRUYXNrcztcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTsgIFxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGEgdGFza1xuZXhwb3J0IGZ1bmN0aW9uIGVkaXRDYXRlZ29yeShjYXRlZ29yeUlkLCB1cGRhdGVkVGl0bGUpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeS50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soY2F0ZWdvcnlJZCwgdGFza0lkLCB1cGRhdGVzKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdGFzayA9IGNhdGVnb3J5LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGlmICh0YXNrKSB7XG4gICAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHByb3BlcnRpZXMgaW4gdXBkYXRlcyBhbmQgYXBwbHkgdGhlbSB0byB0aGUgdGFza1xuICAgICAgT2JqZWN0LmtleXModXBkYXRlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZih0YXNrLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0YXNrW2tleV0gPSB1cGRhdGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rhc2sgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhc2tTdGF0dXMoY2F0ZWdvcnlJZCwgdGFza0lkKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gY2F0ZWdvcnkudGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgLy8gVG9nZ2xlIHRoZSBjb21wbGV0aW9uIHN0YXR1c1xuICAgICAgY2F0ZWdvcnkudGFza3NbdGFza0luZGV4XS5pc0NvbXBsZXRlID0gIWNhdGVnb3J5LnRhc2tzW3Rhc2tJbmRleF0uaXNDb21wbGV0ZTtcbiAgICAgIC8vIE1vdmUgdGhlIHRhc2sgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb25cbiAgICAgIGNvbnN0IHRhc2sgPSBjYXRlZ29yeS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5IGZvciBjb21wbGV0ZWQgdGFza3NcbiAgICAgICAgY2F0ZWdvcnkudGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgZW5kIG9mIHRoZSBhcnJheSBmb3IgaW5jb21wbGV0ZSB0YXNrc1xuICAgICAgICBjYXRlZ29yeS50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgfVxuICAgICAgXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rhc2sgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cbiIsIi8vIHNyYy90YXNrVmlldy5qc1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2F0ZWdvcnksXG4gIGNyZWF0ZVRhc2ssXG4gIGRlbGV0ZUNhdGVnb3J5LFxuICBkZWxldGVUYXNrRnJvbUNhdGVnb3J5LFxuICBlZGl0Q2F0ZWdvcnksXG4gIGVkaXRUYXNrLFxuICB0b2dnbGVUYXNrU3RhdHVzLFxufSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gSW5pdGlhbCBzdGF0ZSBmb3IgY2F0ZWdvcnkgdmlld1xubGV0IGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9ICdpbmJveCc7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHdoZXRoZXIgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxubGV0IHNob3dDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QoY2F0ZWdvcmllcykge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHByb2plY3QgbGlzdCBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBcbiAgLy8gQ2xlYXIgdGhlIHByb2plY3QgbGlzdFxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgXG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5LmlkICE9PSAnaW5ib3gnKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgIGxpLmRhdGFzZXQuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICBcbiAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICBjYXRlZ29yeUl0ZW1CdXR0b24uZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG5cbiAgICAgIGNvbnN0IG1vcmVPcHRpb25zTWVudSA9IGNyZWF0ZU1vcmVPcHRpb25zTWVudShjYXRlZ29yeS5pZCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIGxpLmFwcGVuZChjYXRlZ29yeUl0ZW1CdXR0b24sIG1vcmVPcHRpb25zTWVudSk7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNb3JlT3B0aW9uc01lbnUoY2F0ZWdvcnlJZCkge1xuICBjb25zdCBtb3JlT3B0aW9uc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9yZU9wdGlvbnNNZW51LmNsYXNzTGlzdC5hZGQoJ21vcmUtb3B0aW9ucy1tZW51Jyk7XG4gIG1vcmVPcHRpb25zTWVudS5kYXRhc2V0LmNhdGVnb3J5SWQgPSBjYXRlZ29yeUlkO1xuXG4gIGNvbnN0IG1vcmVPcHRpb25zVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vcmVPcHRpb25zVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21vcmUtb3B0aW9ucy10b2dnbGUnKTtcbiAgbW9yZU9wdGlvbnNUb2dnbGUudGV4dENvbnRlbnQgPSAn4oCi4oCi4oCiJ1xuXG4gIGNvbnN0IG1vcmVPcHRpb25zQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb3JlT3B0aW9uc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9yZS1vcHRpb25zLWNvbnRlbnQnKTtcblxuICBjb25zdCByZW5hbWVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVuYW1lT3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVuYW1lLW9wdGlvbicpO1xuICByZW5hbWVPcHRpb24uZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcbiAgcmVuYW1lT3B0aW9uLnRleHRDb250ZW50ID0gJ1JlbmFtZSc7XG5cbiAgY29uc3QgZGVsZXRlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZS1vcHRpb24nKTtcbiAgZGVsZXRlT3B0aW9uLmRhdGFzZXQuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XG4gIGRlbGV0ZU9wdGlvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gIG1vcmVPcHRpb25zQ29udGVudC5hcHBlbmQocmVuYW1lT3B0aW9uLCBkZWxldGVPcHRpb24pO1xuICBtb3JlT3B0aW9uc01lbnUuYXBwZW5kKG1vcmVPcHRpb25zVG9nZ2xlLCBtb3JlT3B0aW9uc0NvbnRlbnQpO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVyIHRvIHRvZ2dsZSB0aGUgbWVudVxuICBtb3JlT3B0aW9uc1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb3JlT3B0aW9uc0NvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9KTtcblxuICAvLyBFdmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgbWVudSB3aGVuIGNsaWNraW5nIG91dHNpZGVcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIW1vcmVPcHRpb25zTWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFtb3JlT3B0aW9uc1RvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBtb3JlT3B0aW9uc0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1vcmVPcHRpb25zTWVudTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCkge1xuICBjb25zdCBpbmJveE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJyk7XG4gIGluYm94T3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gaW5ib3hPcHRpb25FbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnlJZDtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgaWYgKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCAhPT0gY2F0ZWdvcnlJZCkge1xuICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgLy8gICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmJveE9wdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgICAvLyBDbG9zZSB0aGUgY3JlYXRlIHRhc2sgZm9ybVxuICAgICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoY3JlYXRlVGFza0Zvcm1FbGVtZW50KS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICB9IFxuXG4gICAgICAvLyByZW5kZXJJbmNvbXBsZXRlVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2F0ZWdvcnlDbGljaygpIHtcbiAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBwcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1idXR0b24nKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgICBjb25zdCBjYXRlZ29yeUhlYWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRpdGxlJyk7XG5cbiAgICAgIGlmIChjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgIT09IGNhdGVnb3J5SWQpIHtcbiAgICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgICAgY2F0ZWdvcnlIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlOyAgICBcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIG1vcmUgb3B0aW9ucyBkcm9wZG93biBtZW51XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlLW9wdGlvbnMtbWVudScpLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW9yZU9wdGlvbnNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vcmUtb3B0aW9ucy1tZW51W2RhdGEtY2F0ZWdvcnktaWQ9JyR7Y2F0ZWdvcnlJZH0nXWApO1xuICAgICAgICBtb3JlT3B0aW9uc01lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBcblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWl0ZW1bZGF0YS1jYXRlZ29yeS1pZD0nJHtjYXRlZ29yeUlkfSddYCk7XG4gICAgICAgIHByb2plY3RMaS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIC8vIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgdGhlIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGNyZWF0ZVRhc2tGb3JtRWxlbWVudCkuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgdGFzayBsaXN0IGVsZW1lbnRcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoc2hvd0NvbXBsZXRlZFRhc2tzKSB7XG4gICAgICAvLyBEaXNwbGF5IGluY29tcGxldGUgdGFza3PigKZcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG4gICAgICAvLyDigKZ0aGVuIGRpc3BsYXkgY29tcGxldGVkIHRhc2tzXG4gICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGlzcGxheSBpbmNvbXBsZXRlIHRhc2tzIG9ubHlcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTtcbiAgICB9ICAgIFxuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgICAgICAgICAgICBcbiAgdGFza0l0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpOyAgICAgICAgICAgXG4gIHRhc2tJdGVtRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7IFxuICBcbiAgLy8gQ0hFQ0tCT1ggRUxFTUVOVFMgXG4gIGNvbnN0IGNoZWNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrQm94RGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXdyYXBwZXInKTtcbiAgY29uc3QgY2hlY2tCb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2hlY2tCb3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtYnRuJyk7ICAgICAgICBcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIGNoZWNrQm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICBjaGVja0JveEJ1dHRvbi5pbm5lckhUTUwgKz0gYDxzdmcgY2xhc3M9XCJjaGVja21hcmstaWNvbiR7dGFzay5pc0NvbXBsZXRlID8gJyBjaGVja2VkJyA6ICcnfVwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMTEuMjMgMTMuN2wtMi4xNS0yYS41NS41NSAwIDAgMC0uNzQtLjAxbC4wMy0uMDNhLjQ2LjQ2IDAgMCAwIDAgLjY4TDExLjI0IDE1bDUuNC01LjAxYS40NS40NSAwIDAgMCAwLS42OGwuMDIuMDNhLjU1LjU1IDAgMCAwLS43MyAwbC00LjcgNC4zNXpcIj48L3BhdGg+PC9zdmc+YCAgICAgICAgXG4gIGNoZWNrQm94RGl2LmFwcGVuZENoaWxkKGNoZWNrQm94QnV0dG9uKTtcbiAgXG4gIC8vIFRBU0sgRUxFTUVOVFNcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpOyAgICAgICAgICAgICAgICBcbiAgXG4gIC8vIFRpdGxlXG4gIGNvbnN0IHRpdGxlV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZS13cmFwcGVyJyk7ICAgICAgICAgICAgICAgIFxuICBcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIFxuICAvLyBFZGl0IGFuZCBEZWxldGUgYnV0dG9uc1xuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlZGl0QnV0dG9uID0gJyc7XG4gIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgZWRpdEJ1dHRvbiA9IGNyZWF0ZVRhc2tCdXR0b24oJ0VkaXQnLCAnZWRpdC1idG4nLCB0YXNrLmlkKTsgIFxuICB9ICAgICAgICAgICAgICBcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlVGFza0J1dHRvbignRGVsZXRlJywgJ2RlbGV0ZS1idG4nLCB0YXNrLmlkKTsgICAgICAgICAgICAgICAgXG4gIFxuICBidXR0b25zRGl2LmFwcGVuZChlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICB0aXRsZVdyYXBwZXJEaXYuYXBwZW5kKHRpdGxlRGl2LCBidXR0b25zRGl2KTsgICAgICAgIFxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlV3JhcHBlckRpdik7XG5cbiAgLy8gRGVzY3JpcHRpb25cbiAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICB9XG5cbiAgLy8gRHVlIGRhdGVcbiAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICB9XG4gIFxuICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kKGNoZWNrQm94RGl2LCB0YXNrRGl2KTsgICAgXG4gIFxuICByZXR1cm4gdGFza0l0ZW1FbGVtZW50O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24odGV4dCwgY2xhc3NOYW1lLCB0YXNrSWQpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSwgJ2J0bicpO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHJldHVybiBidXR0b247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIFNldCB0aGUgY2F0ZWdvcnkgSUQgdG8gdGhlIGN1cnJlbnQgdmlld1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQ7XG4gICAgXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBmb3JtIGZvciBzY29wZVxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtIGZpZWxkc1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1kcm9wLWRvd24nKS52YWx1ZTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgdGFzayBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgZGF0YWJhc2VcbiAgICBjcmVhdGVUYXNrKGNhdGVnb3J5SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuXG4gICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG5cbiAgICAvLyBSZWZvY3VzIHRoZSB0aXRsZSBpbnB1dCBmaWVsZFxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKTtcblxuICAgIHJlbmRlclByb2plY3RzTGlzdChjYXRlZ29yaWVzKTtcblxuICAgIC8vIENsZWFyIGZpZWxkcyBhbmQgY2xvc2UgdGhlIG1vZGFsXG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JtRmllbGRzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKS5yZXNldCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS5yZXNldCgpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7ICBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTsgIFxuICB9KTtcbn1cblxuXG4vLyBDaGFuZ2UgYmVoYXZpb3Igb2YgdGhlIHJldHVybiBrZXkgdG8gcHJvZ3JhbW1hdGljYWxseSBjbGljayB0aGUgJ3N1Ym1pdCcgYnRuLlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgIC8vIENoZWNrIGlmIGFkZCB0YXNrIGZvcm0gaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5cbiAgICAvLyBDaGVjayBpZiBlZGl0IHRhc2sgZm9ybSBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbiAgICBjb25zdCBlZGl0VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWJ0bicpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRoZSBhZGQgcHJvamVjdCBtb2RhbCBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC10by1saXN0Jyk7XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXNrRm9ybSkuZGlzcGxheSAhPT0gJ25vbmUnICYmIGdldENvbXB1dGVkU3R5bGUoYWRkUHJvamVjdE1vZGFsKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGFkZFRhc2tTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoYWRkUHJvamVjdE1vZGFsKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIGFkZFByb2plY3RTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlZGl0VGFza01vZGFsKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIGVkaXRUYXNrU3VibWl0QnV0dG9uLmNsaWNrKCk7XG4gICAgICBlZGl0VGFza01vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3hDbGljaygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2ttYXJrLWljb24nKSkge1xuICAgICAgXG4gICAgICAvLyBHZXQgdGhlIGNhdGVnb3J5IElEXG4gICAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuXG4gICAgICAvLyBHZXQgdGhlIHRhc2sgSUQgXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBpc0NvbXBsZXRlIHByb3BlcnR5XG4gICAgICB0b2dnbGVUYXNrU3RhdHVzKGNhdGVnb3J5SWQsIHRhc2tJZCk7XG5cbiAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gIHRhc2tMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnRuJykpIHtcblxuICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gICAgICAvLyBVcGRhdGUgaXNDb21wbGV0ZSBwcm9wZXJ0eVxuICAgICAgZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrKCkge1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bicpO1xuICB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuICAgIHNob3dDb21wbGV0ZWRUYXNrcyA9ICFzaG93Q29tcGxldGVkVGFza3M7XG4gICAgaWYgKHNob3dDb21wbGV0ZWRUYXNrcykge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnSGlkZSBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0bi50ZXh0Q29udGVudCA9ICdTaG93IGNvbXBsZXRlZCB0YXNrcyc7XG4gICAgfVxuICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICB9KTtcbn1cblxuXG4vLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHNob3cgYW5kIGNsb3NlIHByb2plY3QgbW9kYWxcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtbW9kYWwnKTtcbmNvbnN0IHNob3dBZGRQcm9qZWN0TW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBjbG9zZVByb2plY3RNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbC1idG4nKTtcblxuc2hvd0FkZFByb2plY3RNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5jbG9zZVByb2plY3RNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1tb2RhbCcpO1xuY29uc3QgY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1lZGl0LWJ0bicpO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RWRpdFRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1idG4nKSkge1xuICAgICAgICBlZGl0VGFza0RpYWxvZy5zaG93TW9kYWwoKTsgXG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgdGhlIGNhdGVnb3J5IElEXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQ7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgICAgICBkaXNwbGF5VGFza0RldGFpbHNGb3JFZGl0aW5nKGNhdGVnb3J5SWQsIHRhc2tJZCk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tEZXRhaWxzRm9yRWRpdGluZyhjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBjb25zdCB0YXNrID0gY2F0ZWdvcnkudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gIGNvbnN0IGNhdGVnb3J5RHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kcm9wLWRvd24nKTtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlkJykudmFsdWUgPSB0YXNrLmlkO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZS1kYXRlJykudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcmlvcml0eS1kcm9wLWRvd24gb3B0aW9uW3ZhbHVlPScke3Rhc2sucHJpb3JpdHl9J11gKS5zZWxlY3RlZCA9IHRydWU7XG4gIFxuICBjYXRlZ29yeURyb3BEb3duQnV0dG9uLmlubmVySFRNTCA9ICcnO1xuICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY2F0ZWdvcnlPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNhdGVnb3J5LmlkKTtcbiAgICBjYXRlZ29yeU9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlO1xuXG4gICAgY2F0ZWdvcnlEcm9wRG93bkJ1dHRvbi5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWRyb3AtZG93biBvcHRpb25bdmFsdWU9JyR7Y2F0ZWdvcnkuaWR9J11gKS5zZWxlY3RlZCA9IHRydWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVkaXRUYXNrRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgIFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBmb3JtIGZvciBzY29wZVxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIFxuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBmaWVsZHNcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRyb3AtZG93bicpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tJZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3Rhc2staWQnKS52YWx1ZTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktZHJvcC1kb3duJykudmFsdWU7XG5cbiAgICBjb25zdCB1cGRhdGVzID0ge1xuICAgICAgdGl0bGU6IHRpdGxlLCAvLyBNYWtlIHRoaXMgYSByZXF1aXJlbWVudCBpbiBVSSBjb2RlXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICBkdWVEYXRlOiBkdWVEYXRlIHx8ICcnLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5IHx8ICdsb3cnXG4gICAgfTtcblxuICAgIGlmIChjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnlJZCkge1xuICAgICAgZWRpdFRhc2soY3VycmVudENhdGVnb3J5Vmlld0lkLCB0YXNrSWQsIHVwZGF0ZXMpOyAgICAgIFxuICAgIH0gZWxzZSBpZiAoY3VycmVudENhdGVnb3J5Vmlld0lkICE9PSBzZWxlY3RlZENhdGVnb3J5SWQpIHtcbiAgICAgIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY3VycmVudENhdGVnb3J5Vmlld0lkLCB0YXNrSWQpO1xuICAgICAgY3JlYXRlVGFzayhzZWxlY3RlZENhdGVnb3J5SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICBcbiAgICBlZGl0VGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIGNsZWFyRm9ybUZpZWxkcygpOyAgICBcbiAgICByZW5kZXJUYXNrcyhjdXJyZW50Q2F0ZWdvcnlWaWV3SWQsIGNhdGVnb3JpZXMpO1xuICB9KTtcbn1cbiIsIi8vIHNyYy91dGlscy5qc1xuXG4vLyBEYXRhIHN0cnVjdHVyZSB0byBzdG9yZSBjYXRlZ29yaWVzIGFuZCB0YXNrc1xuZXhwb3J0IGxldCBjYXRlZ29yaWVzID0gW1xuICB7XG4gICAgaWQ6ICdpbmJveCcsXG4gICAgdGl0bGU6ICdJbmJveCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4gICAgICAgIHRpdGxlOiAnTXkgZmlyc3QgdGFzaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gb2YgbXkgZmlyc3QgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTExLTIzJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICBjYXRlZ29yeTogJ2luYm94JyxcbiAgICAgICAgdGl0bGU6ICdNeSBzZWNvbmQgdGFzaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZHVlRGF0ZTogJycsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzMnLFxuICAgICAgICBjYXRlZ29yeTogJ1Byb2plY3QgQScsXG4gICAgICAgIHRpdGxlOiAnTXkgdGhpcmQgdGFzaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZHVlRGF0ZTogJycsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAncHJvamVjdC0xJyxcbiAgICB0aXRsZTogJ1NvZnR3YXJlIERldmVsb3BtZW50JyxcbiAgICB0YXNrczogW11cbiAgfSxcbiAge1xuICAgIGlkOiAncHJvamVjdC0yJyxcbiAgICB0aXRsZTogJ1BlcnNvbmFsIFRhc2tzJyxcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogJzMnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5dXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlZFRhc2tzKCkge1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrQ2F0ZWdvcmllcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRUYXNrcyk7XG4gIH1cbiAgcmV0dXJuIFtdOy8vIFJldHVybiBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGluIGxvY2FsU3RvcmFnZSB0byBhdm9pZCBlcnJvclxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3JpZXMoc3RvcmVkVGFza3MpIHtcbiAgLy8gQ2xlYXIgb3V0IHRoZSB0YXNrc1xuICBjYXRlZ29yaWVzLmxlbmd0aCA9IDA7XG5cbiAgLy8gQWRkIHRoZSBuZXcgdGFza3NcbiAgc3RvcmVkVGFza3MuZm9yRWFjaChjYXRlZ29yeSA9PiBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBzcmMvaW5kZXguanNcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBcbiAgcmVuZGVyVGFza3MsXG4gIHJlbmRlclByb2plY3RzTGlzdCwgXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2ssXG4gIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrLFxuICBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrLFxuICBoYW5kbGVJbmJveENhdGVnb3J5Q2xpY2ssXG4gIGhhbmRsZVByb2plY3RDYXRlZ29yeUNsaWNrLFxuICBoYW5kbGVDcmVhdGVUYXNrRm9ybVN1Ym1pc3Npb24sXG4gIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbixcbiAgaGFuZGxlRWRpdFRhc2tGb3JtU3VibWlzc2lvbixcbiAgc2hvd0NyZWF0ZVRhc2tGb3JtLFxuICBjbG9zZUNyZWF0ZVRhc2tGb3JtLFxuICBzaG93RWRpdFRhc2tGb3JtLFxufSBmcm9tICcuL3Rhc2tWaWV3LmpzJztcblxuaW1wb3J0IHsgXG4gIGNhdGVnb3JpZXMsXG4gIGdldFN0b3JlZFRhc2tzLFxuICB1cGRhdGVDYXRlZ29yaWVzLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpIHtcbiAgc2hvd0NyZWF0ZVRhc2tGb3JtKCk7XG4gIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKTtcbiAgc2hvd0VkaXRUYXNrRm9ybSgpO1xuICBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKTtcbiAgaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uKCk7XG4gIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uQ2xpY2soKTtcbiAgaGFuZGxlQ2hlY2tCb3hDbGljaygpOyAvLyBDb21tZW50IG91dCBpZiBpc3N1ZXMgYW5kIHVuY29tbWVudCBiZWxvd1xuICBoYW5kbGVEZWxldGVCdXR0b25DbGljaygpOyAvLyBDb21tZW50IG91dCBpZiBpc3N1ZXMgYW5kIHVuY29tbWVudCBiZWxvd1xuICBoYW5kbGVJbmJveENhdGVnb3J5Q2xpY2soKTtcbiAgaGFuZGxlUHJvamVjdENhdGVnb3J5Q2xpY2soKTtcbiAgaGFuZGxlRWRpdFRhc2tGb3JtU3VibWlzc2lvbigpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgaW4gbG9jYWxTdG9yYWdlXG4gIGxldCBzdG9yZWRUYXNrcyA9IGdldFN0b3JlZFRhc2tzKCk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHN0b3JlZCB0YXNrcywgdXNlIGRlZmF1bHQgdGFza3MgYW5kIHNhdmUgdGhlbSB0byBsb2NhbFN0b3JhZ2VcbiAgaWYgKHN0b3JlZFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICBzdG9yZWRUYXNrcyA9IFsuLi5jYXRlZ29yaWVzXTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgbXlUYXNrcyBpbnN0ZWFkIG9mIHJlYXNzaWduaW5nIGl0XG4gIHVwZGF0ZUNhdGVnb3JpZXMoc3RvcmVkVGFza3MpO1xuXG4gIHJlbmRlclByb2plY3RzTGlzdChzdG9yZWRUYXNrcyk7XG4gIC8vIHJlbmRlckluY29tcGxldGVUYXNrcygnaW5ib3gnLCBzdG9yZWRUYXNrcyk7XG4gIHJlbmRlclRhc2tzKCdpbmJveCcsIHN0b3JlZFRhc2tzKTtcbiAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmluaXRpYWxpemVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=