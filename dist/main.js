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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;;AAGlB,WAAW;;AAEX;EACE,oCAAoC;EACpC,SAAS;;AAEX;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,mDAAmD;EACnD,eAAe;;AAEjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,YAAY;AACZ;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,yCAAyC;EACzC,eAAe;AACjB;;;;AAIA,cAAc;AACd;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,wCAAwC;EACxC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;;;AAIA,SAAS;AACT;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;;AAGA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,wCAAwC;EACxC,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;;;;;AAMA,SAAS;;AAET;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;;EAEE,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kCAAkC;EAClC,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;AACxC;;;;;AAKA,UAAU;;AAEV;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,UAAU;EACV,iBAAiB;AACnB;;AAEA;;EAEE,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;;;;AAKA,sBAAsB;;AAEtB;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 18rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\nbutton.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 1;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 18rem;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 2rem;\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#project-list li {\n  margin-bottom: .5rem;\n}\n\n.project-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n}\n\n.project-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n.delete-btn {\n  margin-left: .5rem;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.add-project-modal-title {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.add-project-to-list {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.form-container-modal {\n  height: 200px;\n  width: 600px;\n}\n\n.form-container-modal>form {\n  display: flex;\n  flex-direction: column;\n}"],"sourceRoot":""}]);
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

  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.tasks.push(newTask);
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

        // renderIncompleteTasks(categoryId, categories);
        renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
      }
    }
  });
}


// export function renderIncompleteTasks(categoryId, categories) {
//   const category = categories.find(category => category.id === categoryId);

//   if (category) {
//     const taskList = document.querySelector('#task-list');
//     taskList.innerHTML = '';

//     // Display incomplete tasks
//     category.tasks.filter(task => !task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
//   }
// }

// export function renderAllTasks(categoryId, categories) {
//   const category = categories.find(category => category.id === categoryId);
//   if (category) {
//     // Get a reference to the task list element
//     const taskList = document.querySelector('#task-list');
    
//     // Clear the task list
//     taskList.innerHTML = '';
    
//     // Display incomplete tasks
//     category.tasks.filter(task => !task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
  
//     // Display completed tasks
//     category.tasks.filter(task => task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
//   }
// }


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
    createProject(title);

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


// Single button for toggling the display of completed tasks
const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');


function handleToggleCompletedTasksButtonClick() {
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

  const task = getTaskDetails(taskId);
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
//   showCreateTaskForm();
//   closeCreateTaskForm();
//   showEditTaskForm();
//   handleCreateProjectFormSubmission();
//   handleCreateTaskFormSubmission();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlGQUF5RixZQUFZLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsU0FBUyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFh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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFZa0I7O0FBT0g7OztBQUdwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1GQUFxQztBQUN2QyxFQUFFLGlFQUFtQixJQUFJO0FBQ3pCLEVBQUUscUVBQXVCLElBQUk7QUFDN0IsRUFBRSxzRUFBd0I7QUFDMUIsRUFBRSx3RUFBMEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix5REFBYzs7QUFFbEM7QUFDQTtBQUNBLElBQUksNkRBQWtCLENBQUMsaURBQVU7QUFDakMsc0JBQXNCLGlEQUFVO0FBQ2hDOztBQUVBO0FBQ0EsRUFBRSwyREFBZ0I7O0FBRWxCLEVBQUUsZ0VBQWtCO0FBQ3BCO0FBQ0EsRUFBRSx5REFBVztBQUNiO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrU2VydmljZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlLmNzcyAqL1xuXG5cbi8qIEdMT0JBTCAqL1xuXG4qIHtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0eWVsbG93OyAqL1xuICBtYXJnaW46IDA7XG5cbn1cblxuI2dyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTAwdmg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogI0UyRTJFMjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG5cbi8qIFRPUCBCQVIgKi9cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRvcC1iYXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uaG9tZS1idG4sXG4ubWVudS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuMjVyZW07XG59XG5cbi5ob21lLWJ0bjpob3Zlcixcbi5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4vKiBMRUZUIE1FTlUgKi9cbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0OHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICB3aWR0aDogMThyZW07XG59XG5cbi5sZWZ0LW1lbnUtd3JhcHBlciB7XG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaW5ib3gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuNXJlbTtcbn1cblxuLmluYm94LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdC1saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogTUFJTiAqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBtYXJnaW46IDNyZW0gYXV0bztcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xufVxuXG5cbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG59XG5cbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogLjc1cmVtIDAgLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2stdGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVja2JveC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG59XG5cbi5jaGVja2JveC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja21hcmstaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbn1cblxuLmNoZWNrYm94LWJ0biAuY2hlY2ttYXJrLWljb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jaGVja2JveC1idG46aG92ZXIgLmNoZWNrbWFyay1pY29uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNoZWNrYm94LWJ0bi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNoZWNrbWFyay1pY29uLmNoZWNrZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuXG4udGl0bGUuY2hlY2tlZCB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICBjb2xvcjogIzhmOGY4ZjtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kdWUtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cblxuXG5cblxuLyogRk9STSAqL1xuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybS1jb250YWluZXI+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tb3B0aW9ucyB7XG4gIG1hcmdpbjogLjVyZW0gMDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgcGFkZGluZzogLjc1cmVtIDA7XG59XG5cbi5jYW5jZWwtYnRuLFxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNkdWUtZGF0ZSB7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG5cblxuXG4vKiBNT0RBTCAqL1xuXG5kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xufVxuXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmFkZC1wcm9qZWN0LW1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tb2RhbC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5jbG9zZS1tb2RhbC1idG4sXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hZGQtcHJvamVjdC10by1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG5cbi8qIFVQREFURSBUQVNLIE1PREFMICovXG5cbi5mb3JtLWNvbnRhaW5lci1tb2RhbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyLW1vZGFsPmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7OztBQUdsQixXQUFXOztBQUVYO0VBQ0Usb0NBQW9DO0VBQ3BDLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtREFBbUQ7RUFDbkQsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7Ozs7QUFJQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7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LHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzcmMvc3R5bGUuY3NzICovXFxuXFxuXFxuLyogR0xPQkFMICovXFxuXFxuKiB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgbGlnaHR5ZWxsb3c7ICovXFxuICBtYXJnaW46IDA7XFxuXFxufVxcblxcbiNncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAjRTJFMkUyO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi5idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuXFxuXFxuLyogVE9QIEJBUiAqL1xcbi50b3AtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcC1iYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBMRUZUIE1FTlUgKi9cXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0OHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxuLmxlZnQtbWVudS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5pbmJveC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxufVxcblxcbi5pbmJveC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBNQUlOICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XFxufVxcblxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stdGl0bGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja21hcmstaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zcHg7XFxuICByaWdodDogLTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biAuY2hlY2ttYXJrLWljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja21hcmstaWNvbi5jaGVja2VkIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi50aXRsZS5jaGVja2VkIHtcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICBjb2xvcjogIzhmOGY4ZjtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIEZPUk0gKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybS1vcHRpb25zIHtcXG4gIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5zdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2R1ZS1kYXRlIHtcXG4gIHBhZGRpbmc6IDAgLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBmaWx0ZXI6IGludmVydCg0NSUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogTU9EQUwgKi9cXG5cXG5kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMTByZW0gYXV0bztcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUtaW5wdXQge1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjNiM2I7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LW1vZGFsLXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLWJ0bixcXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcblxcblxcblxcbi8qIFVQREFURSBUQVNLIE1PREFMICovXFxuXFxuLmZvcm0tY29udGFpbmVyLW1vZGFsIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1tb2RhbD5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBzcmMvdGFza1NlcnZpY2UuanNcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCB7IFxuICBjYXRlZ29yaWVzLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5pbXBvcnQgeyBcbiAgZGlzcGxheUluY29tcGxldGVUYXNrcywgXG4gIGNsZWFyRm9ybUZpZWxkcywgXG4gIGRpc3BsYXlBbGxUYXNrcywgXG4gIGRpc3BsYXlQcm9qZWN0cyxcbiAgcmVuZGVySW5jb21wbGV0ZVRhc2tzLFxufSBmcm9tIFwiLi90YXNrVmlldy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSkge1xuICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIHRhc2tzOiBbXVxuICB9O1xuXG4gIGNhdGVnb3JpZXMucHVzaChuZXdDYXRlZ29yeSk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhjYXRlZ29yeUlkLCB0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdwcmlvcml0eS00JywgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgaXNDb21wbGV0ZTogaXNDb21wbGV0ZSxcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNhdGVnb3JpZXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7ICBcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkKSB7XG4gIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgIT09IGNhdGVnb3J5SWQpO1xuICBjYXRlZ29yaWVzID0gdXBkYXRlZENhdGVnb3JpZXM7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIGNhdGVnb3J5LnRhc2tzID0gdXBkYXRlZFRhc2tzO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpOyAgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgYSB0YXNrXG5leHBvcnQgZnVuY3Rpb24gZWRpdENhdGVnb3J5KGNhdGVnb3J5SWQsIHVwZGF0ZWRUaXRsZSkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5LnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGNhdGVnb3J5SWQsIHRhc2tJZCwgdXBkYXRlcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNvbnN0IHRhc2sgPSBjYXRlZ29yeS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBwcm9wZXJ0aWVzIGluIHVwZGF0ZXMgYW5kIGFwcGx5IHRoZW0gdG8gdGhlIHRhc2tcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYodGFzay5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGFza1trZXldID0gdXBkYXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUYXNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG4vLyAvLyBQbGFjZSB0aGlzIGluc2lkZSB0aGUgVUkgZnVuY3Rpb24gdG8gaGFuZGxlIHRhc2sgZWRpdHNcbi8vIGNvbnN0IHVwZGF0ZXMgPSB7XG4vLyAgIHRpdGxlOiB0aXRsZSwgLy8gTWFrZSB0aGlzIGEgcmVxdWlyZW1lbnQgaW4gVUkgY29kZVxuLy8gICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfHwgJycsXG4vLyAgIGR1ZURhdGU6IGR1ZURhdGUgfHwgJycsXG4vLyAgIHByaW9yaXR5OiBwcmlvcml0eSB8fCAncHJpb3JpdHktNCdcbi8vIH07XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBjYXRlZ29yeS50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdHVzXG4gICAgICBjYXRlZ29yeS50YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSAhY2F0ZWdvcnkudGFza3NbdGFza0luZGV4XS5pc0NvbXBsZXRlO1xuICAgICAgLy8gTW92ZSB0aGUgdGFzayB0byB0aGUgY29ycmVjdCBwb3NpdGlvblxuICAgICAgY29uc3QgdGFzayA9IGNhdGVnb3J5LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkgZm9yIGNvbXBsZXRlZCB0YXNrc1xuICAgICAgICBjYXRlZ29yeS50YXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGZvciBpbmNvbXBsZXRlIHRhc2tzXG4gICAgICAgIGNhdGVnb3J5LnRhc2tzLnB1c2godGFzayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG4vLyAvLyBGdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdHNcbi8vIGNsYXNzIFByb2plY3Qge1xuLy8gICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcbi8vICAgICB0aGlzLmlkID0gaWQ7XG4vLyAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrc1xuLy8gY2xhc3MgVGFzayB7XG4vLyAgIGNvbnN0cnVjdG9yKGlkLCBjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4vLyAgICAgdGhpcy5pZCA9IGlkO1xuLy8gICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbi8vICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuLy8gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4vLyAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4vLyAgIH1cbi8vIH1cblxuLyogQ1JFQVRFIExPR0lDICovXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4vLyAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBJRCBmb3IgdGhlIHRhc2tcbi8vICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcblxuLy8gICAvLyBDcmVhdGUgYSBuZXcgdGFzayB1c2luZyB0aGUgVGFzayBjbGFzc1xuLy8gICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcblxuLy8gICBteVRhc2tzLnB1c2godGFzaylcbi8vICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UobXlUYXNrcyk7XG5cbi8vICAgLy8gVXBkYXRlIHRoZSBVSVxuLy8gICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzKG15VGFza3MpO1xuXG4vLyAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xuLy8gICBjbGVhckZvcm1GaWVsZHMoKTtcbi8vIH1cblxuXG4vKiBERUxFVEUgTE9HSUMgKi9cblxuLy8gLy8gRnVuY3Rpb24gdG8gZGVsZXRlIHRhc2tzIGJ5IHRoZWlyIHVuaXF1ZSBJRFxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4vLyAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG4vLyAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4vLyAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHVwZGF0ZWRUYXNrcyk7XG4vLyAgIHVwZGF0ZU15VGFza3ModXBkYXRlZFRhc2tzKTtcblxuLy8gICBpZiAoIXNob3dDb21wbGV0ZWRUYXNrcykge1xuLy8gICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModXBkYXRlZFRhc2tzKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBkaXNwbGF5QWxsVGFza3ModXBkYXRlZFRhc2tzKTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGUodGFza0lkKSB7XG4vLyAgIC8vIE9wZXJhdGUgb24gdGhlIGxhdGVzdCB0YXNrcyBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuLy8gICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuLy8gICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4vLyAgIGlmICh0YXNrSW5kZXggIT09IC0xICYmIHRhc2tzW3Rhc2tJbmRleF0uaXNDb21wbGV0ZSA9PT0gZmFsc2UpIHtcbi8vICAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSB0cnVlOyAgXG4vLyAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuLy8gICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModGFza3MpO1xuXG4vLyAgIH0gZWxzZSBpZiAodGFza0luZGV4ICE9PSAtMSAmJiB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPT09IHRydWUpIHtcbi8vICAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSBmYWxzZTtcbi8vICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4vLyAgICAgZGlzcGxheUFsbFRhc2tzKHRhc2tzKTtcbi8vICAgfSAgXG4vLyAgICAgZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbi8vICAgfSAgXG4vLyB9XG4iLCIvLyBzcmMvdGFza1ZpZXcuanNcbi8vIGltcG9ydCB7IFxuLy8gICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsIFxuLy8gICBjcmVhdGVQcm9qZWN0LFxuLy8gICBjcmVhdGVUYXNrLCBcbi8vICAgZGVsZXRlVGFzaywgXG4vLyAgIHRvZ2dsZVRhc2tDb21wbGV0ZSwgXG4vLyAgIG15VGFza3MsXG4vLyAgIGdldFRhc2tEZXRhaWxzLFxuLy8gfSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ2F0ZWdvcnksXG4gIGNyZWF0ZVRhc2ssXG4gIGRlbGV0ZUNhdGVnb3J5LFxuICBkZWxldGVUYXNrRnJvbUNhdGVnb3J5LFxuICBlZGl0Q2F0ZWdvcnksXG4gIGVkaXRUYXNrLFxuICB0b2dnbGVUYXNrU3RhdHVzLFxufSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzTGlzdChjYXRlZ29yaWVzKSB7XG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgcHJvamVjdCBsaXN0IGVsZW1lbnRcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gIFxuICAvLyBDbGVhciB0aGUgcHJvamVjdCBsaXN0XG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xuICBcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBpZiAoY2F0ZWdvcnkuaWQgIT09ICdpbmJveCcpIHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgICAgbGkuZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG4gIFxuICAgICAgY29uc3QgY2F0ZWdvcnlJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjYXRlZ29yeUl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcbiAgICAgIGNhdGVnb3J5SXRlbUJ1dHRvbi5kYXRhc2V0LmNhdGVnb3J5SWQgPSBjYXRlZ29yeS5pZDtcbiAgICAgIFxuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzcz1cInByb2plY3RfaWNvblwiIHN0eWxlPVwiY29sb3I6IHJnYigxODQsIDE4NCwgMTg0KTtcIj48cGF0aCBkPVwiTTEyIDdhNSA1IDAgMTEwIDEwIDUgNSAwIDAxMC0xMHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPjwvc3ZnPmBcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGNhdGVnb3J5SXRlbUJ1dHRvbik7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gSW5pdGlhbCBzdGF0ZSBmb3IgY2F0ZWdvcnkgdmlld1xubGV0IGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9ICdpbmJveCc7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHdoZXRoZXIgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxubGV0IHNob3dDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCkge1xuICBjb25zdCBpbmJveE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJyk7XG4gIGluYm94T3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gaW5ib3hPcHRpb25FbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnlJZDtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgaWYgKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCAhPT0gY2F0ZWdvcnlJZCkge1xuICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGluYm94T3B0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICAgIC8vIHJlbmRlckluY29tcGxldGVUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2F0ZWdvcnlDbGljaygpIHtcbiAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBwcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1idXR0b24nKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgICBjb25zdCBjYXRlZ29yeUhlYWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRpdGxlJyk7XG5cbiAgICAgIGlmIChjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgIT09IGNhdGVnb3J5SWQpIHtcbiAgICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgICAgY2F0ZWdvcnlIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICAgICAgLy8gcmVuZGVySW5jb21wbGV0ZVRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbmNvbXBsZXRlVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcykge1xuLy8gICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG5cbi8vICAgaWYgKGNhdGVnb3J5KSB7XG4vLyAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4vLyAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbi8vICAgICAvLyBEaXNwbGF5IGluY29tcGxldGUgdGFza3Ncbi8vICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NvbXBsZXRlKS5mb3JFYWNoKHRhc2sgPT4ge1xuLy8gICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrSXRlbUVsZW1lbnQodGFzayk7XG4vLyAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpIHtcbi8vICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuLy8gICBpZiAoY2F0ZWdvcnkpIHtcbi8vICAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhc2sgbGlzdCBlbGVtZW50XG4vLyAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgXG4vLyAgICAgLy8gQ2xlYXIgdGhlIHRhc2sgbGlzdFxuLy8gICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIFxuLy8gICAgIC8vIERpc3BsYXkgaW5jb21wbGV0ZSB0YXNrc1xuLy8gICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4vLyAgICAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKTtcbi8vICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbi8vICAgICB9KTtcbiAgXG4vLyAgICAgLy8gRGlzcGxheSBjb21wbGV0ZWQgdGFza3Ncbi8vICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4vLyAgICAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKTtcbi8vICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSB0YXNrIGxpc3QgZWxlbWVudFxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgIFxuICAgIC8vIENsZWFyIHRoZSB0YXNrIGxpc3RcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmIChzaG93Q29tcGxldGVkVGFza3MpIHtcbiAgICAgIC8vIERpc3BsYXkgaW5jb21wbGV0ZSB0YXNrc+KAplxuICAgICAgY2F0ZWdvcnkudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNDb21wbGV0ZSkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrSXRlbUVsZW1lbnQodGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgIH0pOyAgICBcbiAgICAgIC8vIOKApnRoZW4gZGlzcGxheSBjb21wbGV0ZWQgdGFza3NcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaXNDb21wbGV0ZSkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrSXRlbUVsZW1lbnQodGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgIH0pOyAgICBcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEaXNwbGF5IGluY29tcGxldGUgdGFza3Mgb25seVxuICAgICAgY2F0ZWdvcnkudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNDb21wbGV0ZSkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrSXRlbUVsZW1lbnQodGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgIH0pO1xuICAgIH0gICAgXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSXRlbUVsZW1lbnQodGFzaykge1xuICBjb25zdCB0YXNrSXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAgICAgICAgICAgIFxuICB0YXNrSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7ICAgICAgICAgICBcbiAgdGFza0l0ZW1FbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDsgXG4gIFxuICAvLyBDSEVDS0JPWCBFTEVNRU5UUyBcbiAgY29uc3QgY2hlY2tCb3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2tCb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2hlY2tCb3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtYnRuJyk7ICAgICAgICBcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIGNoZWNrQm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICBjaGVja0JveEJ1dHRvbi5pbm5lckhUTUwgKz0gYDxzdmcgY2xhc3M9XCJjaGVja21hcmstaWNvbiR7dGFzay5pc0NvbXBsZXRlID8gJyBjaGVja2VkJyA6ICcnfVwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMTEuMjMgMTMuN2wtMi4xNS0yYS41NS41NSAwIDAgMC0uNzQtLjAxbC4wMy0uMDNhLjQ2LjQ2IDAgMCAwIDAgLjY4TDExLjI0IDE1bDUuNC01LjAxYS40NS40NSAwIDAgMCAwLS42OGwuMDIuMDNhLjU1LjU1IDAgMCAwLS43MyAwbC00LjcgNC4zNXpcIj48L3BhdGg+PC9zdmc+YCAgICAgICAgXG4gIGNoZWNrQm94RGl2LmFwcGVuZENoaWxkKGNoZWNrQm94QnV0dG9uKTtcbiAgXG4gIC8vIFRBU0sgRUxFTUVOVFNcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpOyAgICAgICAgICAgICAgICBcbiAgXG4gIC8vIFRpdGxlXG4gIGNvbnN0IHRpdGxlV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZS13cmFwcGVyJyk7ICAgICAgICAgICAgICAgIFxuICBcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIFxuICAvLyBFZGl0IGFuZCBEZWxldGUgYnV0dG9uc1xuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlZGl0QnV0dG9uID0gJyc7XG4gIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignRWRpdCcsICdlZGl0LWJ0bicsIHRhc2suaWQpOyAgXG4gIH0gICAgICAgICAgICAgIFxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ0RlbGV0ZScsICdkZWxldGUtYnRuJywgdGFzay5pZCk7ICAgICAgICAgICAgICAgIFxuICBcbiAgYnV0dG9uc0Rpdi5hcHBlbmQoZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgdGl0bGVXcmFwcGVyRGl2LmFwcGVuZCh0aXRsZURpdiwgYnV0dG9uc0Rpdik7ICAgICAgICBcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZVdyYXBwZXJEaXYpO1xuXG4gIC8vIERlc2NyaXB0aW9uXG4gIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgfVxuXG4gIC8vIER1ZSBkYXRlXG4gIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgfVxuICBcbiAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZChjaGVja0JveERpdiwgdGFza0Rpdik7ICAgIFxuICBcbiAgcmV0dXJuIHRhc2tJdGVtRWxlbWVudDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCwgY2xhc3NOYW1lLCB0YXNrSWQpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSwgJ2J0bicpO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHJldHVybiBidXR0b247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBmaWVsZHNcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZVRhc2soY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgY29uc29sZS5sb2codGl0bGUpO1xuXG4gICAgLy8gUmVmb2N1cyB0aGUgdGl0bGUgaW5wdXQgZmllbGRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpOyBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBmaWVsZHNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0JykudmFsdWU7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gdGhlIGRhdGFiYXNlXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSk7XG5cbiAgICAvLyBDbGVhciBmaWVsZHMgYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckZvcm1GaWVsZHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpLnJlc2V0KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpLnJlc2V0KCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDcmVhdGVUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpOyBcbiAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTsgIFxuICB9KTtcbn1cblxuLy8gQ2hhbmdlIGJlaGF2aW9yIG9mIHRoZSByZXR1cm4ga2V5IHRvIHByb2dyYW1tYXRpY2FsbHkgY2xpY2sgdGhlICdBZGQgdGFzaycgYnRuLlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgIC8vIENoZWNrIGlmIGFkZCB0YXNrIGZvcm0gaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGFkZCBwcm9qZWN0IG1vZGFsIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtbW9kYWwnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXRvLWxpc3QnKTtcblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGFkZFRhc2tGb3JtKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIGFkZFRhc2tTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoYWRkUHJvamVjdE1vZGFsKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIGFkZFByb2plY3RTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTsgIFxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3hDbGljaygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2ttYXJrLWljb24nKSkge1xuICAgICAgXG4gICAgICAvLyBHZXQgdGhlIGNhdGVnb3J5IElEXG4gICAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuXG4gICAgICAvLyBHZXQgdGhlIHRhc2sgSUQgXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBpc0NvbXBsZXRlIHByb3BlcnR5XG4gICAgICB0b2dnbGVUYXNrU3RhdHVzKGNhdGVnb3J5SWQsIHRhc2tJZCk7XG5cbiAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gIHRhc2tMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnRuJykpIHtcblxuICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gICAgICAvLyBVcGRhdGUgaXNDb21wbGV0ZSBwcm9wZXJ0eVxuICAgICAgZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIFNpbmdsZSBidXR0b24gZm9yIHRvZ2dsaW5nIHRoZSBkaXNwbGF5IG9mIGNvbXBsZXRlZCB0YXNrc1xuY29uc3QgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4nKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkVGFza3NCdXR0b25DbGljaygpIHtcbiAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICBzaG93Q29tcGxldGVkVGFza3MgPSAhc2hvd0NvbXBsZXRlZFRhc2tzO1xuICAgIGlmIChzaG93Q29tcGxldGVkVGFza3MpIHtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZFRhc2tzQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgY29tcGxldGVkIHRhc2tzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH1cbiAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgfSk7XG59XG5cblxuLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBzaG93IGFuZCBjbG9zZSBwcm9qZWN0IG1vZGFsXG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBzaG93QWRkUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwtYnRuJyk7XG5cbnNob3dBZGRQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY2xlYXJGb3JtRmllbGRzKCk7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbmNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZWRpdC1idG4nKTtcblxuY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7ICAgIFxuXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgICBkaXNwbGF5VGFza0RldGFpbHModGFza0lkKTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tEZXRhaWxzKHRhc2tJZCkge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhc2sgbGlzdCBlbGVtZW50XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKTtcblxuICBjb25zdCB0YXNrID0gZ2V0VGFza0RldGFpbHModGFza0lkKTtcbiAgY29uc29sZS5sb2codGFzayk7XG4gIFxuICAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gIGVkaXRUYXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlZGl0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiIC8+XG4gICAgPHRleHRhcmVhIGlkPVwiZWRpdC1kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2suZHVlRGF0ZX1cIiAvPlxuICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eS0xXCI+UHJpb3JpdHkgMTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHktMlwiPlByaW9yaXR5IDI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5LTNcIj5Qcmlvcml0eSAzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eS00XCIgc2VsZWN0ZWQ+UHJpb3JpdHkgNDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmJveFwiIHNlbGVjdGVkPkluYm94PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9ybS1mb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1lZGl0LWJ0biBidG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIGA7XG59IiwiLy8gc3JjL3V0aWxzLmpzXG5cbi8vIERhdGEgc3RydWN0dXJlIHRvIHN0b3JlIGNhdGVnb3JpZXMgYW5kIHRhc2tzXG5leHBvcnQgbGV0IGNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBpZDogJ2luYm94JyxcbiAgICB0aXRsZTogJ0luYm94JyxcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICBjYXRlZ29yeTogJ2luYm94JyxcbiAgICAgICAgdGl0bGU6ICdNeSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBvZiBteSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzEwLTMxLTIwMjMnLFxuICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIGNhdGVnb3J5OiAnaW5ib3gnLFxuICAgICAgICB0aXRsZTogJ015IHNlY29uZCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICAgIHByaW9yaXR5OiBudWxsLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIGNhdGVnb3J5OiAnUHJvamVjdCBBJyxcbiAgICAgICAgdGl0bGU6ICdNeSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICAgIHByaW9yaXR5OiBudWxsLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0LTEnLFxuICAgIHRpdGxlOiAnU29mdHdhcmUgRGV2ZWxvcG1lbnQnLFxuICAgIHRhc2tzOiBbXVxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0LTInLFxuICAgIHRpdGxlOiAnUGVyc29uYWwgVGFza3MnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiAnTXkgdGhpcmQgdGFzaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgICAgICBkdWVEYXRlOiBudWxsLFxuICAgICAgICBwcmlvcml0eTogbnVsbCxcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbl1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmVkVGFza3MoKSB7XG4gIGNvbnN0IHN0b3JlZFRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tDYXRlZ29yaWVzJyk7XG4gIGlmIChzdG9yZWRUYXNrcykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFRhc2tzKTtcbiAgfVxuICByZXR1cm4gW107Ly8gUmV0dXJuIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgaW4gbG9jYWxTdG9yYWdlIHRvIGF2b2lkIGVycm9yXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrQ2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcmllcyhzdG9yZWRUYXNrcykge1xuICAvLyBDbGVhciBvdXQgdGhlIHRhc2tzXG4gIGNhdGVnb3JpZXMubGVuZ3RoID0gMDtcblxuICAvLyBBZGQgdGhlIG5ldyB0YXNrc1xuICBzdG9yZWRUYXNrcy5mb3JFYWNoKGNhdGVnb3J5ID0+IGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHNyYy9pbmRleC5qc1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCB7IFxuLy8gICB1cGRhdGVNeVRhc2tzLFxuLy8gICBteVRhc2tzLCBcbi8vICAgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlLCBcbi8vICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UsXG4vLyAgIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSxcbi8vICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsXG4vLyAgIG15UHJvamVjdHMsXG4vLyAgIHVwZGF0ZU15UHJvamVjdHMsIFxuLy8gfSBmcm9tICcuL3Rhc2tTZXJ2aWNlJztcblxuXG5pbXBvcnQgeyBcbiAgLy8gcmVuZGVySW5jb21wbGV0ZVRhc2tzLCBcbiAgcmVuZGVyVGFza3MsXG4gIHJlbmRlclByb2plY3RzTGlzdCwgXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2ssXG4gIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrLFxuICBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrLFxuICBoYW5kbGVJbmJveENhdGVnb3J5Q2xpY2ssXG4gIGhhbmRsZVByb2plY3RDYXRlZ29yeUNsaWNrLFxufSBmcm9tICcuL3Rhc2tWaWV3LmpzJztcblxuaW1wb3J0IHsgXG4gIGNhdGVnb3JpZXMsXG4gIGdldFN0b3JlZFRhc2tzLFxuICB1cGRhdGVDYXRlZ29yaWVzLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpIHtcbi8vICAgc2hvd0NyZWF0ZVRhc2tGb3JtKCk7XG4vLyAgIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKTtcbi8vICAgc2hvd0VkaXRUYXNrRm9ybSgpO1xuLy8gICBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKTtcbi8vICAgaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uKCk7XG4gIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uQ2xpY2soKTtcbiAgaGFuZGxlQ2hlY2tCb3hDbGljaygpOyAvLyBDb21tZW50IG91dCBpZiBpc3N1ZXMgYW5kIHVuY29tbWVudCBiZWxvd1xuICBoYW5kbGVEZWxldGVCdXR0b25DbGljaygpOyAvLyBDb21tZW50IG91dCBpZiBpc3N1ZXMgYW5kIHVuY29tbWVudCBiZWxvd1xuICBoYW5kbGVJbmJveENhdGVnb3J5Q2xpY2soKTtcbiAgaGFuZGxlUHJvamVjdENhdGVnb3J5Q2xpY2soKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIHRhc2tzIGluIGxvY2FsU3RvcmFnZVxuICBsZXQgc3RvcmVkVGFza3MgPSBnZXRTdG9yZWRUYXNrcygpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBzdG9yZWQgdGFza3MsIHVzZSBkZWZhdWx0IHRhc2tzIGFuZCBzYXZlIHRoZW0gdG8gbG9jYWxTdG9yYWdlXG4gIGlmIChzdG9yZWRUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG4gICAgc3RvcmVkVGFza3MgPSBbLi4uY2F0ZWdvcmllc107XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIG15VGFza3MgaW5zdGVhZCBvZiByZWFzc2lnbmluZyBpdFxuICB1cGRhdGVDYXRlZ29yaWVzKHN0b3JlZFRhc2tzKTtcblxuICByZW5kZXJQcm9qZWN0c0xpc3Qoc3RvcmVkVGFza3MpO1xuICAvLyByZW5kZXJJbmNvbXBsZXRlVGFza3MoJ2luYm94Jywgc3RvcmVkVGFza3MpO1xuICByZW5kZXJUYXNrcygnaW5ib3gnLCBzdG9yZWRUYXNrcyk7XG4gIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpO1xufVxuXG5pbml0aWFsaXplQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9