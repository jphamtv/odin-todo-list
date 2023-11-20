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

.add-project-btn:focus {
  border: none;
  background-color: rgb(255, 255, 255, .0);
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

.edit-btn, 
.delete-btn {
  display: none;
}

.delete-btn {
  margin-left: .5rem;
  color: red;
}

.task-item:hover .edit-btn,
.task-item:hover .delete-btn {
	display: inline-block;
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

.modal-title,
.modal-description {
  color: #fff;
}

.modal-btns {
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  padding-top: 1rem;
}

.close-modal-btn,
.close-edit-modal-btn,
.add-project-to-list,
#confirm-delete-btn,
#cancel-delete-btn {
  padding: .5rem 1rem;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
}

.add-project-to-list,
#confirm-delete-btn {
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


/* EDIT PROJECT TITLE MODAL */

#edit-project-title-modal {
  width: 300px;  
}

#edit-project-title-form {
  border: none;
}

#edit-project-title-input {
  height: 28px;
  margin-bottom: 1rem;
  border: 1px solid #3b3b3b;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
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

.rename-option,
.delete-option {
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

.delete-option {
  color: red;
}

.rename-option:hover,
.delete-option:hover {
  background-color: #3b3b3b;

}

/* Hide default arrow for dropdown */
.dropdown-toggle::-ms-expand {
  display: none;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 20rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\nbutton.current,\nli.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 3;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 20rem;\n  z-index: 2;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 2rem;\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  gap: .25rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: .5rem;\n  border-radius: 6px;\n  padding: 2px 0px;\n}\n\n.project-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  padding: .75rem 0 .75rem 8px;\n  border-radius: 6px;\n  border: none;\n}\n\n.project-item:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.add-project-btn:focus {\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n.edit-btn, \n.delete-btn {\n  display: none;\n}\n\n.delete-btn {\n  margin-left: .5rem;\n  color: red;\n}\n\n.task-item:hover .edit-btn,\n.task-item:hover .delete-btn {\n\tdisplay: inline-block;\n}\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn,\n.save-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn,\n.save-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date,\n#edit-due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.modal-title,\n.modal-description {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.close-edit-modal-btn,\n.add-project-to-list,\n#confirm-delete-btn,\n#cancel-delete-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list,\n#confirm-delete-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.edit-form-container {\n  height: auto;\n  width: 600px;\n}\n\n.edit-form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\n.edit-form-footer {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n\n/* EDIT PROJECT TITLE MODAL */\n\n#edit-project-title-modal {\n  width: 300px;  \n}\n\n#edit-project-title-form {\n  border: none;\n}\n\n#edit-project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n/* MORE OPTIONS BUTTON */\n\n.more-options-menu {\n  position: relative;\n  display: none;\n}\n\n.more-options-toggle {\n  background: none;\n  border: none;\n  font-size: 13px; /* size of the dots */\n  letter-spacing: 2px;\n  cursor: pointer;\n  color: #a1a1a1;\n  height: 2rem;\n}\n\n.more-options-toggle:hover {\n  color: #fff;\n}\n\n.more-options-content {\n  display: none; \n  position: absolute;\n  background-color: #333333;\n  border-radius: 6px;\n  border: 1px solid #444444;\n  min-width: 7rem;\n  padding: .5rem;\n  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.more-options-content.show {\n  display: block;\n}\n\n.show {\n  display: block;\n}\n\n.rename-option,\n.delete-option {\n  color: #fff;\n  padding: .75rem 1.5rem;\n  text-decoration: none;\n  display: block;\n  width: 100%;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  text-align: left;\n}\n\n.delete-option {\n  color: red;\n}\n\n.rename-option:hover,\n.delete-option:hover {\n  background-color: #3b3b3b;\n\n}\n\n/* Hide default arrow for dropdown */\n.dropdown-toggle::-ms-expand {\n  display: none;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
// src/taskService.js





function createCategory(title) {
  const newCategory = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title,
    tasks: []
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.push(newCategory);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
}


function createTask(categoryId, title, description = '', dueDate = '', priority = 'low', isComplete = false) {
  const newTask = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
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
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateCategories)(updatedCategories);
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
/* harmony export */   handleDeleteProjectButtonClick: () => (/* binding */ handleDeleteProjectButtonClick),
/* harmony export */   handleEditProjectTitleSaveButton: () => (/* binding */ handleEditProjectTitleSaveButton),
/* harmony export */   handleEditTaskFormSubmission: () => (/* binding */ handleEditTaskFormSubmission),
/* harmony export */   handleInboxCategoryClick: () => (/* binding */ handleInboxCategoryClick),
/* harmony export */   handleProjectCategoryClick: () => (/* binding */ handleProjectCategoryClick),
/* harmony export */   handleRenameProjectButtonClick: () => (/* binding */ handleRenameProjectButtonClick),
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
  renameOption.classList.add('rename-option');
  renameOption.dataset.categoryId = categoryId;
  renameOption.textContent = 'Rename';

  const deleteOption = document.createElement('button');
  deleteOption.classList.add('delete-option');
  deleteOption.dataset.categoryId = categoryId;
  deleteOption.textContent = 'Delete';

  moreOptionsContent.append(renameOption, deleteOption);
  moreOptionsMenu.append(moreOptionsToggle, moreOptionsContent);

  // Event listener to toggle the menu
  moreOptionsToggle.addEventListener('click', () => {
    moreOptionsContent.classList.toggle('show');
    moreOptionsToggle.style.color = '#fff';
  });

  // Event listener to close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!moreOptionsMenu.contains(event.target) && !moreOptionsToggle.contains(event.target)) {
      moreOptionsContent.classList.remove('show');
      moreOptionsToggle.style.color = '';
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

      document.querySelectorAll('.more-options-menu').forEach(dropdown => {
        dropdown.classList.remove('show');
      });

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
        
      } else if (currentCategoryViewId === categoryId) {
        categoryHeaderTitle.textContent = category.title;
        const projectLi = document.querySelector(`.project-item[data-category-id='${categoryId}']`);
        projectLi.classList.add('current');        
      }

      renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
    }
  });
}


function handleDeleteProjectButtonClick() {
  const projectListElement = document.querySelector('#project-list');
  const deleteConfirmationModal = document.querySelector('#delete-confirmation-modal');
  const confirmButton = document.querySelector('#confirm-delete-btn');
  const cancelButton = document.querySelector('#cancel-delete-btn');
  const moreOptionsToggle = document.querySelector('.more-options-toggle');
  
  projectListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-option')) {
      const categoryId = event.target.dataset.categoryId;
      
      // Find the closest menu content related to clicked delete option
      const moreOptionsContent = event.target.closest('.more-options-content');

      deleteConfirmationModal.showModal();

      if (moreOptionsContent) {
        moreOptionsContent.classList.remove('show');
        moreOptionsToggle.style.color = '';      
      }
      
      // Set up one-time event listener for the confirm button
      confirmButton.addEventListener('click', () => {
        (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.deleteCategory)(categoryId);
        deleteConfirmationModal.close();
        renderProjectsList(_utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
        triggerInboxButtonClick();      
      });

      // Cancel deletion
      cancelButton.addEventListener('click', () => {
        deleteConfirmationModal.close();
      });
    }
  });
}


function handleRenameProjectButtonClick() {
  const projectListElement = document.querySelector('#project-list');
  const editProjectTitleModal = document.querySelector('#edit-project-title-modal');
  projectListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('rename-option')) {
      const categoryId = event.target.dataset.categoryId;

      editProjectTitleModal.showModal();
      displayProjectTitleForEditing(categoryId);
    }
  });
}


function displayProjectTitleForEditing(categoryId) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.find(category => category.id === categoryId);

  document.querySelector('#category-id').value = category.id;
  document.querySelector('#edit-project-title-input').value = category.title;  
}


function handleEditProjectTitleSaveButton() {
  document.querySelector('#edit-project-title-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const updatedTitle = document.querySelector('#edit-project-title-input').value;
    const categoryId = document.querySelector('#category-id').value;

    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.editCategory)(categoryId, updatedTitle);

    renderProjectsList(_utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
    clearFormFields();
    editProjectTitleModal.close();

    triggerCategoryButtonClick(categoryId);

  });
}



function triggerInboxButtonClick() {
  const inboxOptionButton = document.querySelector('.inbox-button');
  if (inboxOptionButton) {
    inboxOptionButton.click();
  } else {
    console.error('Inbox button not found');
  }
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

    const categoryId = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories[_utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.length - 1].id;
    
    triggerCategoryButtonClick(categoryId);
  });
}


function triggerCategoryButtonClick(categoryId) {
  const projectButton = document.querySelector(`.project-button[data-category-id='${categoryId}']`);
  if (projectButton) {
    projectButton.click();
  } else {
    console.error('Category button not found');
  }
}


function clearFormFields() {
  document.querySelector('#create-task').reset();
  document.querySelector('#create-project-form').reset();
  document.querySelector('#edit-task').reset();
  document.querySelector('#edit-project-title-form').reset();
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

    // Check if the edit project modal is open and visible
    const editProjectTitleModal = document.querySelector('#edit-project-title-modal');
    const editProjectTitleSaveButton = document.querySelector('.save-btn');

    if (getComputedStyle(addTaskForm).display !== 'none' && getComputedStyle(addProjectModal).display === 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    } else if (getComputedStyle(editTaskModal).display !== 'none') {
      editTaskSubmitButton.click();
      editTaskModal.close();
    } else if (getComputedStyle(editProjectTitleModal). display !== 'none') {
      editProjectTitleSaveButton.click();
      editProjectTitleModal.close();
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

const editProjectTitleModal = document.querySelector('#edit-project-title-modal');
const editProjectTitleCancelButton = document.querySelector('.close-edit-modal-btn');

editProjectTitleCancelButton.addEventListener('click', (event) => {
  event.preventDefault();
  editProjectTitleModal.close();
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
/* harmony export */   getStoredCategories: () => (/* binding */ getStoredCategories),
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


function getStoredCategories() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}


function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}


function updateCategories(updatedCategories) {
  // Clear out the tasks
  categories.length = 0;

  // Add the new tasks
  updatedCategories.forEach(category => categories.push(category));
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
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteProjectButtonClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleRenameProjectButtonClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleEditProjectTitleSaveButton)();
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedCategories = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStoredCategories)();

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedCategories.length === 0) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.categories);
    storedCategories = [..._utils_js__WEBPACK_IMPORTED_MODULE_2__.categories];
  }

  // Update the contents of taskCategories from localStorage instead of reassigning it
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.updateCategories)(storedCategories);

  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectsList)(storedCategories);
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)('inbox', storedCategories);
  initializeEventListeners();
}

initializeApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPLHlGQUF5RixZQUFZLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsU0FBUyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksU0FBUyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFNBQVMsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FB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QixJQUFJO0FBQ3pCLEVBQUUscUVBQXVCLElBQUk7QUFDN0IsRUFBRSxzRUFBd0I7QUFDMUIsRUFBRSx3RUFBMEI7QUFDNUIsRUFBRSwwRUFBNEI7QUFDOUIsRUFBRSw0RUFBOEI7QUFDaEMsRUFBRSw0RUFBOEI7QUFDaEMsRUFBRSw4RUFBZ0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw4REFBbUI7O0FBRTVDO0FBQ0E7QUFDQSxJQUFJLDZEQUFrQixDQUFDLGlEQUFVO0FBQ2pDLDJCQUEyQixpREFBVTtBQUNyQzs7QUFFQTtBQUNBLEVBQUUsMkRBQWdCOztBQUVsQixFQUFFLGdFQUFrQjtBQUNwQixFQUFFLHlEQUFXO0FBQ2I7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tTZXJ2aWNlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzcmMvc3R5bGUuY3NzICovXG5cblxuLyogR0xPQkFMICovXG5cbioge1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgbGlnaHR5ZWxsb3c7ICovXG4gIG1hcmdpbjogMDtcblxufVxuXG4jZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjRTJFMkUyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xufVxuXG4uYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uY3VycmVudCxcbmxpLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG5cbi8qIFRPUCBCQVIgKi9cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMztcbn1cblxuLnRvcC1iYXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uaG9tZS1idG4sXG4ubWVudS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuMjVyZW07XG59XG5cbi5ob21lLWJ0bjpob3Zlcixcbi5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4vKiBMRUZUIE1FTlUgKi9cbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0OHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICB3aWR0aDogMjByZW07XG4gIHotaW5kZXg6IDI7XG59XG5cbi5sZWZ0LW1lbnUtd3JhcHBlciB7XG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaW5ib3gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuNXJlbTtcbn1cblxuLmluYm94LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IC4yNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiAuNzVyZW0gMCAuNzVyZW0gOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC1idG46Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XG59XG5cblxuXG4vKiBNQUlOICovXG4ubWFpbi1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIG1heC13aWR0aDogNTByZW07XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XG59XG5cblxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1OCwgNTgsIDU4KTtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay10aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZWNrYm94LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbn1cblxuLmNoZWNrYm94LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrbWFyay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtM3B4O1xufVxuXG4uY2hlY2tib3gtYnRuIC5jaGVja21hcmstaWNvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNoZWNrYm94LWJ0bjpob3ZlciAuY2hlY2ttYXJrLWljb24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2hlY2tib3gtYnRuLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2hlY2ttYXJrLWljb24uY2hlY2tlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG59XG5cbi50aXRsZS5jaGVja2VkIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmR1ZS1kYXRlIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4uZWRpdC1idG4sIFxuLmRlbGV0ZS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRhc2staXRlbTpob3ZlciAuZWRpdC1idG4sXG4udGFzay1pdGVtOmhvdmVyIC5kZWxldGUtYnRuIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cblxuXG4vKiBGT1JNICovXG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lcj5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IC41cmVtIC41cmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgbWFyZ2luOiAuNXJlbSAwO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBwYWRkaW5nOiAuNzVyZW0gMDtcbn1cblxuLmNhbmNlbC1idG4sXG4uc3VibWl0LWJ0bixcbi5zYXZlLWJ0biB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Ym1pdC1idG4sXG4uc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI2R1ZS1kYXRlLFxuI2VkaXQtZHVlLWRhdGUge1xuICBwYWRkaW5nOiAwIC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBmaWx0ZXI6IGludmVydCg0NSUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcbn1cblxuXG5cblxuLyogTU9EQUwgKi9cblxuZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTByZW0gYXV0bztcbn1cblxuI3Byb2plY3QtdGl0bGUtaW5wdXQge1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjNiM2I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNjcmVhdGUtcHJvamVjdC1mb3JtIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5tb2RhbC10aXRsZSxcbi5tb2RhbC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9kYWwtYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4uY2xvc2UtbW9kYWwtYnRuLFxuLmNsb3NlLWVkaXQtbW9kYWwtYnRuLFxuLmFkZC1wcm9qZWN0LXRvLWxpc3QsXG4jY29uZmlybS1kZWxldGUtYnRuLFxuI2NhbmNlbC1kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLWxpc3QsXG4jY29uZmlybS1kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG5cbi8qIFVQREFURSBUQVNLIE1PREFMICovXG5cbi5lZGl0LWZvcm0tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5lZGl0LWZvcm0tY29udGFpbmVyPmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZWRpdC1mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIHBhZGRpbmc6IC43NXJlbSAwO1xufVxuXG5cbi8qIEVESVQgUFJPSkVDVCBUSVRMRSBNT0RBTCAqL1xuXG4jZWRpdC1wcm9qZWN0LXRpdGxlLW1vZGFsIHtcbiAgd2lkdGg6IDMwMHB4OyAgXG59XG5cbiNlZGl0LXByb2plY3QtdGl0bGUtZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4vKiBNT1JFIE9QVElPTlMgQlVUVE9OICovXG5cbi5tb3JlLW9wdGlvbnMtbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vcmUtb3B0aW9ucy10b2dnbGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDsgLyogc2l6ZSBvZiB0aGUgZG90cyAqL1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjYTFhMWExO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5tb3JlLW9wdGlvbnMtdG9nZ2xlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tb3JlLW9wdGlvbnMtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLm1vcmUtb3B0aW9ucy1jb250ZW50LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJlbmFtZS1vcHRpb24sXG4uZGVsZXRlLW9wdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kZWxldGUtb3B0aW9uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnJlbmFtZS1vcHRpb246aG92ZXIsXG4uZGVsZXRlLW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG5cbn1cblxuLyogSGlkZSBkZWZhdWx0IGFycm93IGZvciBkcm9wZG93biAqL1xuLmRyb3Bkb3duLXRvZ2dsZTo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjs7O0FBR2xCLFdBQVc7O0FBRVg7RUFDRSxvQ0FBb0M7RUFDcEMsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7O0FBR0EsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7Ozs7QUFJQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QjtFQUN6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QUUzQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3JjL3N0eWxlLmNzcyAqL1xcblxcblxcbi8qIEdMT0JBTCAqL1xcblxcbioge1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0eWVsbG93OyAqL1xcbiAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4jZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI0UyRTJFMjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG5cXG59XFxuXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5jdXJyZW50LFxcbmxpLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuXFxuXFxuLyogVE9QIEJBUiAqL1xcbi50b3AtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLnRvcC1iYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBMRUZUIE1FTlUgKi9cXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0OHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5sZWZ0LW1lbnUtd3JhcHBlciB7XFxuICBtYXJnaW46IDIuNXJlbSAxLjVyZW0gMCAycmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaW5ib3gtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uaW5ib3gtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAuMjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMnB4IDBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogLjc1cmVtIDAgLjc1cmVtIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcXG59XFxuXFxuXFxuXFxuLyogTUFJTiAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBtYXJnaW46IDNyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xcbn1cXG5cXG5cXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbn1cXG5cXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogLjc1cmVtIDAgLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDU4LCA1OCwgNTgpO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLXRpdGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2ttYXJrLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgcmlnaHQ6IC0zcHg7XFxufVxcblxcbi5jaGVja2JveC1idG4gLmNoZWNrbWFyay1pY29uIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bjpob3ZlciAuY2hlY2ttYXJrLWljb24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrYm94LWJ0bi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2ttYXJrLWljb24uY2hlY2tlZCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG5cXG4udGl0bGUuY2hlY2tlZCB7XFxuICBjb2xvcjogIzdmN2Y3ZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcbiAgY29sb3I6ICM4ZjhmOGY7XFxuICBmb250LXNpemU6IC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICBmb250LXNpemU6IC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLmVkaXQtYnRuLCBcXG4uZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzay1pdGVtOmhvdmVyIC5lZGl0LWJ0bixcXG4udGFzay1pdGVtOmhvdmVyIC5kZWxldGUtYnRuIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcblxcblxcblxcbi8qIEZPUk0gKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybS1vcHRpb25zIHtcXG4gIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5zdWJtaXQtYnRuLFxcbi5zYXZlLWJ0biB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idG4sXFxuLnNhdmUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XFxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jZHVlLWRhdGUsXFxuI2VkaXQtZHVlLWRhdGUge1xcbiAgcGFkZGluZzogMCAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBNT0RBTCAqL1xcblxcbmRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUsXFxuLm1vZGFsLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLWJ0bixcXG4uY2xvc2UtZWRpdC1tb2RhbC1idG4sXFxuLmFkZC1wcm9qZWN0LXRvLWxpc3QsXFxuI2NvbmZpcm0tZGVsZXRlLWJ0bixcXG4jY2FuY2VsLWRlbGV0ZS1idG4ge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC10by1saXN0LFxcbiNjb25maXJtLWRlbGV0ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcblxcblxcblxcbi8qIFVQREFURSBUQVNLIE1PREFMICovXFxuXFxuLmVkaXQtZm9ybS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uZWRpdC1mb3JtLWNvbnRhaW5lcj5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZWRpdC1mb3JtLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBwYWRkaW5nOiAuNzVyZW0gMDtcXG59XFxuXFxuXFxuLyogRURJVCBQUk9KRUNUIFRJVExFIE1PREFMICovXFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZS1tb2RhbCB7XFxuICB3aWR0aDogMzAwcHg7ICBcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZS1mb3JtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyogTU9SRSBPUFRJT05TIEJVVFRPTiAqL1xcblxcbi5tb3JlLW9wdGlvbnMtbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9yZS1vcHRpb25zLXRvZ2dsZSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxM3B4OyAvKiBzaXplIG9mIHRoZSBkb3RzICovXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNhMWExYTE7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb3JlLW9wdGlvbnMtdG9nZ2xlOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9yZS1vcHRpb25zLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcXG4gIG1pbi13aWR0aDogN3JlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb3JlLW9wdGlvbnMtY29udGVudC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJlbmFtZS1vcHRpb24sXFxuLmRlbGV0ZS1vcHRpb24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZGVsZXRlLW9wdGlvbiB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVuYW1lLW9wdGlvbjpob3ZlcixcXG4uZGVsZXRlLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xcblxcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgYXJyb3cgZm9yIGRyb3Bkb3duICovXFxuLmRyb3Bkb3duLXRvZ2dsZTo6LW1zLWV4cGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBzcmMvdGFza1NlcnZpY2UuanNcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCB7IFxuICBjYXRlZ29yaWVzLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG4gIHVwZGF0ZUNhdGVnb3JpZXMsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSkge1xuICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIHRhc2tzOiBbXVxuICB9O1xuXG4gIGNhdGVnb3JpZXMucHVzaChuZXdDYXRlZ29yeSk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhjYXRlZ29yeUlkLCB0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdsb3cnLCBpc0NvbXBsZXRlID0gZmFsc2UpIHtcbiAgY29uc3QgbmV3VGFzayA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBpc0NvbXBsZXRlOiBpc0NvbXBsZXRlLFxuICB9O1xuICBcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTsgIFxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5SWQpIHtcbiAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCAhPT0gY2F0ZWdvcnlJZCk7XG4gIHVwZGF0ZUNhdGVnb3JpZXModXBkYXRlZENhdGVnb3JpZXMpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwgdGFza0lkKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gY2F0ZWdvcnkudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICBjYXRlZ29yeS50YXNrcyA9IHVwZGF0ZWRUYXNrcztcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTsgIFxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRDYXRlZ29yeShjYXRlZ29yeUlkLCB1cGRhdGVkVGl0bGUpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeS50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayhjYXRlZ29yeUlkLCB0YXNrSWQsIHVwZGF0ZXMpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0YXNrID0gY2F0ZWdvcnkudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKHRhc2spIHtcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgcHJvcGVydGllcyBpbiB1cGRhdGVzIGFuZCBhcHBseSB0aGVtIHRvIHRoZSB0YXNrXG4gICAgICBPYmplY3Qua2V5cyh1cGRhdGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmKHRhc2suaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRhc2tba2V5XSA9IHVwZGF0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBjYXRlZ29yeS50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdHVzXG4gICAgICBjYXRlZ29yeS50YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSAhY2F0ZWdvcnkudGFza3NbdGFza0luZGV4XS5pc0NvbXBsZXRlO1xuICAgICAgLy8gTW92ZSB0aGUgdGFzayB0byB0aGUgY29ycmVjdCBwb3NpdGlvblxuICAgICAgY29uc3QgdGFzayA9IGNhdGVnb3J5LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkgZm9yIGNvbXBsZXRlZCB0YXNrc1xuICAgICAgICBjYXRlZ29yeS50YXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGZvciBpbmNvbXBsZXRlIHRhc2tzXG4gICAgICAgIGNhdGVnb3J5LnRhc2tzLnB1c2godGFzayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cbiIsIi8vIHNyYy90YXNrVmlldy5qc1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2F0ZWdvcnksXG4gIGNyZWF0ZVRhc2ssXG4gIGRlbGV0ZUNhdGVnb3J5LFxuICBkZWxldGVUYXNrRnJvbUNhdGVnb3J5LFxuICBlZGl0Q2F0ZWdvcnksXG4gIGVkaXRUYXNrLFxuICB0b2dnbGVUYXNrU3RhdHVzLFxufSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gSW5pdGlhbCBzdGF0ZSBmb3IgY2F0ZWdvcnkgdmlld1xubGV0IGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9ICdpbmJveCc7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHdoZXRoZXIgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxubGV0IHNob3dDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QoY2F0ZWdvcmllcykge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHByb2plY3QgbGlzdCBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBcbiAgLy8gQ2xlYXIgdGhlIHByb2plY3QgbGlzdFxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgXG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5LmlkICE9PSAnaW5ib3gnKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgIGxpLmRhdGFzZXQuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICBcbiAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICBjYXRlZ29yeUl0ZW1CdXR0b24uZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG5cbiAgICAgIGNvbnN0IG1vcmVPcHRpb25zTWVudSA9IGNyZWF0ZU1vcmVPcHRpb25zTWVudShjYXRlZ29yeS5pZCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIGxpLmFwcGVuZChjYXRlZ29yeUl0ZW1CdXR0b24sIG1vcmVPcHRpb25zTWVudSk7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNb3JlT3B0aW9uc01lbnUoY2F0ZWdvcnlJZCkge1xuICBjb25zdCBtb3JlT3B0aW9uc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9yZU9wdGlvbnNNZW51LmNsYXNzTGlzdC5hZGQoJ21vcmUtb3B0aW9ucy1tZW51Jyk7XG4gIG1vcmVPcHRpb25zTWVudS5kYXRhc2V0LmNhdGVnb3J5SWQgPSBjYXRlZ29yeUlkO1xuXG4gIGNvbnN0IG1vcmVPcHRpb25zVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1vcmVPcHRpb25zVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21vcmUtb3B0aW9ucy10b2dnbGUnKTtcbiAgbW9yZU9wdGlvbnNUb2dnbGUudGV4dENvbnRlbnQgPSAn4oCi4oCi4oCiJ1xuXG4gIGNvbnN0IG1vcmVPcHRpb25zQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb3JlT3B0aW9uc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9yZS1vcHRpb25zLWNvbnRlbnQnKTtcblxuICBjb25zdCByZW5hbWVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVuYW1lT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbmFtZS1vcHRpb24nKTtcbiAgcmVuYW1lT3B0aW9uLmRhdGFzZXQuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XG4gIHJlbmFtZU9wdGlvbi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuXG4gIGNvbnN0IGRlbGV0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVPcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLW9wdGlvbicpO1xuICBkZWxldGVPcHRpb24uZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcbiAgZGVsZXRlT3B0aW9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgbW9yZU9wdGlvbnNDb250ZW50LmFwcGVuZChyZW5hbWVPcHRpb24sIGRlbGV0ZU9wdGlvbik7XG4gIG1vcmVPcHRpb25zTWVudS5hcHBlbmQobW9yZU9wdGlvbnNUb2dnbGUsIG1vcmVPcHRpb25zQ29udGVudCk7XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gdG9nZ2xlIHRoZSBtZW51XG4gIG1vcmVPcHRpb25zVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vcmVPcHRpb25zQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgbW9yZU9wdGlvbnNUb2dnbGUuc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gIH0pO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSBtZW51IHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmICghbW9yZU9wdGlvbnNNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIW1vcmVPcHRpb25zVG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIG1vcmVPcHRpb25zQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBtb3JlT3B0aW9uc1RvZ2dsZS5zdHlsZS5jb2xvciA9ICcnO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1vcmVPcHRpb25zTWVudTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCkge1xuICBjb25zdCBpbmJveE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJyk7XG4gIGluYm94T3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gaW5ib3hPcHRpb25FbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnlJZDtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgaWYgKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCAhPT0gY2F0ZWdvcnlJZCkge1xuICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vcmUtb3B0aW9ucy1tZW51JykuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICB9KTtcblxuICAgICAgaW5ib3hPcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICAgICAgLy8gQ2xvc2UgdGhlIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGNyZWF0ZVRhc2tGb3JtRWxlbWVudCkuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgICAgfSBcblxuICAgICAgLy8gcmVuZGVySW5jb21wbGV0ZVRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdENhdGVnb3J5Q2xpY2soKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtYnV0dG9uJykpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeUlkO1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgICBpZiAoY3VycmVudENhdGVnb3J5Vmlld0lkICE9PSBjYXRlZ29yeUlkKSB7XG4gICAgICAgIGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTsgICAgXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBtb3JlIG9wdGlvbnMgZHJvcGRvd24gbWVudVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZS1vcHRpb25zLW1lbnUnKS5mb3JFYWNoKGRyb3Bkb3duID0+IHtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vcmVPcHRpb25zTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tb3JlLW9wdGlvbnMtbWVudVtkYXRhLWNhdGVnb3J5LWlkPScke2NhdGVnb3J5SWR9J11gKTtcbiAgICAgICAgbW9yZU9wdGlvbnNNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTsgICAgXG5cbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaXRlbScpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1pdGVtW2RhdGEtY2F0ZWdvcnktaWQ9JyR7Y2F0ZWdvcnlJZH0nXWApO1xuICAgICAgICBwcm9qZWN0TGkuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAvLyBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgICAgIC8vIENsb3NlIHRoZSBjcmVhdGUgdGFzayBmb3JtXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShjcmVhdGVUYXNrRm9ybUVsZW1lbnQpLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgICAgfSAgICAgICAgIFxuICAgICAgICBcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudENhdGVnb3J5Vmlld0lkID09PSBjYXRlZ29yeUlkKSB7XG4gICAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtaXRlbVtkYXRhLWNhdGVnb3J5LWlkPScke2NhdGVnb3J5SWR9J11gKTtcbiAgICAgICAgcHJvamVjdExpLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0QnV0dG9uQ2xpY2soKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgY29uc3QgZGVsZXRlQ29uZmlybWF0aW9uTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWNvbmZpcm1hdGlvbi1tb2RhbCcpO1xuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tZGVsZXRlLWJ0bicpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLWRlbGV0ZS1idG4nKTtcbiAgY29uc3QgbW9yZU9wdGlvbnNUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZS1vcHRpb25zLXRvZ2dsZScpO1xuICBcbiAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1vcHRpb24nKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG4gICAgICBcbiAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgbWVudSBjb250ZW50IHJlbGF0ZWQgdG8gY2xpY2tlZCBkZWxldGUgb3B0aW9uXG4gICAgICBjb25zdCBtb3JlT3B0aW9uc0NvbnRlbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vcmUtb3B0aW9ucy1jb250ZW50Jyk7XG5cbiAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbk1vZGFsLnNob3dNb2RhbCgpO1xuXG4gICAgICBpZiAobW9yZU9wdGlvbnNDb250ZW50KSB7XG4gICAgICAgIG1vcmVPcHRpb25zQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIG1vcmVPcHRpb25zVG9nZ2xlLnN0eWxlLmNvbG9yID0gJyc7ICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFNldCB1cCBvbmUtdGltZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGNvbmZpcm0gYnV0dG9uXG4gICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkKTtcbiAgICAgICAgZGVsZXRlQ29uZmlybWF0aW9uTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHNMaXN0KGNhdGVnb3JpZXMpO1xuICAgICAgICB0cmlnZ2VySW5ib3hCdXR0b25DbGljaygpOyAgICAgIFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENhbmNlbCBkZWxldGlvblxuICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVDb25maXJtYXRpb25Nb2RhbC5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVuYW1lUHJvamVjdEJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gIGNvbnN0IGVkaXRQcm9qZWN0VGl0bGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtdGl0bGUtbW9kYWwnKTtcbiAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbmFtZS1vcHRpb24nKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG5cbiAgICAgIGVkaXRQcm9qZWN0VGl0bGVNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGl0bGVGb3JFZGl0aW5nKGNhdGVnb3J5SWQpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUaXRsZUZvckVkaXRpbmcoY2F0ZWdvcnlJZCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LWlkJykudmFsdWUgPSBjYXRlZ29yeS5pZDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC10aXRsZS1pbnB1dCcpLnZhbHVlID0gY2F0ZWdvcnkudGl0bGU7ICBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RUaXRsZVNhdmVCdXR0b24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtdGl0bGUtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1cGRhdGVkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXRpdGxlLWlucHV0JykudmFsdWU7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeS1pZCcpLnZhbHVlO1xuXG4gICAgZWRpdENhdGVnb3J5KGNhdGVnb3J5SWQsIHVwZGF0ZWRUaXRsZSk7XG5cbiAgICByZW5kZXJQcm9qZWN0c0xpc3QoY2F0ZWdvcmllcyk7XG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgZWRpdFByb2plY3RUaXRsZU1vZGFsLmNsb3NlKCk7XG5cbiAgICB0cmlnZ2VyQ2F0ZWdvcnlCdXR0b25DbGljayhjYXRlZ29yeUlkKTtcblxuICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHRyaWdnZXJJbmJveEJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCBpbmJveE9wdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1idXR0b24nKTtcbiAgaWYgKGluYm94T3B0aW9uQnV0dG9uKSB7XG4gICAgaW5ib3hPcHRpb25CdXR0b24uY2xpY2soKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbmJveCBidXR0b24gbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgdGFzayBsaXN0IGVsZW1lbnRcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoc2hvd0NvbXBsZXRlZFRhc2tzKSB7XG4gICAgICAvLyBEaXNwbGF5IGluY29tcGxldGUgdGFza3PigKZcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG4gICAgICAvLyDigKZ0aGVuIGRpc3BsYXkgY29tcGxldGVkIHRhc2tzXG4gICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGlzcGxheSBpbmNvbXBsZXRlIHRhc2tzIG9ubHlcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTtcbiAgICB9ICAgIFxuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgICAgICAgICAgICBcbiAgdGFza0l0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpOyAgICAgICAgICAgXG4gIHRhc2tJdGVtRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7IFxuICBcbiAgLy8gQ0hFQ0tCT1ggRUxFTUVOVFMgXG4gIGNvbnN0IGNoZWNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrQm94RGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXdyYXBwZXInKTtcbiAgY29uc3QgY2hlY2tCb3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2hlY2tCb3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtYnRuJyk7ICAgICAgICBcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIGNoZWNrQm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICBjaGVja0JveEJ1dHRvbi5pbm5lckhUTUwgKz0gYDxzdmcgY2xhc3M9XCJjaGVja21hcmstaWNvbiR7dGFzay5pc0NvbXBsZXRlID8gJyBjaGVja2VkJyA6ICcnfVwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMTEuMjMgMTMuN2wtMi4xNS0yYS41NS41NSAwIDAgMC0uNzQtLjAxbC4wMy0uMDNhLjQ2LjQ2IDAgMCAwIDAgLjY4TDExLjI0IDE1bDUuNC01LjAxYS40NS40NSAwIDAgMCAwLS42OGwuMDIuMDNhLjU1LjU1IDAgMCAwLS43MyAwbC00LjcgNC4zNXpcIj48L3BhdGg+PC9zdmc+YCAgICAgICAgXG4gIGNoZWNrQm94RGl2LmFwcGVuZENoaWxkKGNoZWNrQm94QnV0dG9uKTtcbiAgXG4gIC8vIFRBU0sgRUxFTUVOVFNcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpOyAgICAgICAgICAgICAgICBcbiAgXG4gIC8vIFRpdGxlXG4gIGNvbnN0IHRpdGxlV3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZS13cmFwcGVyJyk7ICAgICAgICAgICAgICAgIFxuICBcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIFxuICAvLyBFZGl0IGFuZCBEZWxldGUgYnV0dG9uc1xuICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlZGl0QnV0dG9uID0gJyc7XG4gIGlmICghdGFzay5pc0NvbXBsZXRlKSB7XG4gICAgZWRpdEJ1dHRvbiA9IGNyZWF0ZVRhc2tCdXR0b24oJ0VkaXQnLCAnZWRpdC1idG4nLCB0YXNrLmlkKTsgIFxuICB9ICAgICAgICAgICAgICBcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlVGFza0J1dHRvbignRGVsZXRlJywgJ2RlbGV0ZS1idG4nLCB0YXNrLmlkKTsgICAgICAgICAgICAgICAgXG4gIFxuICBidXR0b25zRGl2LmFwcGVuZChlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICB0aXRsZVdyYXBwZXJEaXYuYXBwZW5kKHRpdGxlRGl2LCBidXR0b25zRGl2KTsgICAgICAgIFxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlV3JhcHBlckRpdik7XG5cbiAgLy8gRGVzY3JpcHRpb25cbiAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICB9XG5cbiAgLy8gRHVlIGRhdGVcbiAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICB9XG4gIFxuICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kKGNoZWNrQm94RGl2LCB0YXNrRGl2KTsgICAgXG4gIFxuICByZXR1cm4gdGFza0l0ZW1FbGVtZW50O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdXR0b24odGV4dCwgY2xhc3NOYW1lLCB0YXNrSWQpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSwgJ2J0bicpO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHJldHVybiBidXR0b247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIFNldCB0aGUgY2F0ZWdvcnkgSUQgdG8gdGhlIGN1cnJlbnQgdmlld1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQ7XG4gICAgXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBmb3JtIGZvciBzY29wZVxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtIGZpZWxkc1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1kcm9wLWRvd24nKS52YWx1ZTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgdGFzayBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgZGF0YWJhc2VcbiAgICBjcmVhdGVUYXNrKGNhdGVnb3J5SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuXG4gICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG5cbiAgICAvLyBSZWZvY3VzIHRoZSB0aXRsZSBpbnB1dCBmaWVsZFxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKTtcblxuICAgIHJlbmRlclByb2plY3RzTGlzdChjYXRlZ29yaWVzKTtcblxuICAgIC8vIENsZWFyIGZpZWxkcyBhbmQgY2xvc2UgdGhlIG1vZGFsXG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGNhdGVnb3JpZXNbY2F0ZWdvcmllcy5sZW5ndGggLSAxXS5pZDtcbiAgICBcbiAgICB0cmlnZ2VyQ2F0ZWdvcnlCdXR0b25DbGljayhjYXRlZ29yeUlkKTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gdHJpZ2dlckNhdGVnb3J5QnV0dG9uQ2xpY2soY2F0ZWdvcnlJZCkge1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtYnV0dG9uW2RhdGEtY2F0ZWdvcnktaWQ9JyR7Y2F0ZWdvcnlJZH0nXWApO1xuICBpZiAocHJvamVjdEJ1dHRvbikge1xuICAgIHByb2plY3RCdXR0b24uY2xpY2soKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBidXR0b24gbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JtRmllbGRzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKS5yZXNldCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS5yZXNldCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXRpdGxlLWZvcm0nKS5yZXNldCgpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7ICBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTsgIFxuICB9KTtcbn1cblxuXG4vLyBDaGFuZ2UgYmVoYXZpb3Igb2YgdGhlIHJldHVybiBrZXkgdG8gcHJvZ3JhbW1hdGljYWxseSBjbGljayB0aGUgJ3N1Ym1pdCcgYnRuLlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgIC8vIENoZWNrIGlmIGFkZCB0YXNrIGZvcm0gaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5cbiAgICAvLyBDaGVjayBpZiBlZGl0IHRhc2sgZm9ybSBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbiAgICBjb25zdCBlZGl0VGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWJ0bicpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRoZSBhZGQgcHJvamVjdCBtb2RhbCBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC10by1saXN0Jyk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZWRpdCBwcm9qZWN0IG1vZGFsIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICBjb25zdCBlZGl0UHJvamVjdFRpdGxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXRpdGxlLW1vZGFsJyk7XG4gICAgY29uc3QgZWRpdFByb2plY3RUaXRsZVNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1idG4nKTtcblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGFkZFRhc2tGb3JtKS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShhZGRQcm9qZWN0TW9kYWwpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhZGRQcm9qZWN0TW9kYWwpLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgICAgYWRkUHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgfSBlbHNlIGlmIChnZXRDb21wdXRlZFN0eWxlKGVkaXRUYXNrTW9kYWwpLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgZWRpdFRhc2tTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICAgIGVkaXRUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoZWRpdFByb2plY3RUaXRsZU1vZGFsKS4gZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICBlZGl0UHJvamVjdFRpdGxlU2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgZWRpdFByb2plY3RUaXRsZU1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3hDbGljaygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2ttYXJrLWljb24nKSkge1xuICAgICAgXG4gICAgICAvLyBHZXQgdGhlIGNhdGVnb3J5IElEXG4gICAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuXG4gICAgICAvLyBHZXQgdGhlIHRhc2sgSUQgXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBpc0NvbXBsZXRlIHByb3BlcnR5XG4gICAgICB0b2dnbGVUYXNrU3RhdHVzKGNhdGVnb3J5SWQsIHRhc2tJZCk7XG5cbiAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gIHRhc2tMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnRuJykpIHtcblxuICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gICAgICAvLyBVcGRhdGUgaXNDb21wbGV0ZSBwcm9wZXJ0eVxuICAgICAgZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrKCkge1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bicpO1xuICB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuICAgIHNob3dDb21wbGV0ZWRUYXNrcyA9ICFzaG93Q29tcGxldGVkVGFza3M7XG4gICAgaWYgKHNob3dDb21wbGV0ZWRUYXNrcykge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnSGlkZSBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0bi50ZXh0Q29udGVudCA9ICdTaG93IGNvbXBsZXRlZCB0YXNrcyc7XG4gICAgfVxuICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICB9KTtcbn1cblxuXG4vLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHNob3cgYW5kIGNsb3NlIHByb2plY3QgbW9kYWxcbmNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtbW9kYWwnKTtcbmNvbnN0IHNob3dBZGRQcm9qZWN0TW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBjbG9zZVByb2plY3RNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbC1idG4nKTtcblxuc2hvd0FkZFByb2plY3RNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5jbG9zZVByb2plY3RNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1tb2RhbCcpO1xuY29uc3QgY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1lZGl0LWJ0bicpO1xuXG5jbG9zZUVkaXRUYXNrTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5jb25zdCBlZGl0UHJvamVjdFRpdGxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXRpdGxlLW1vZGFsJyk7XG5jb25zdCBlZGl0UHJvamVjdFRpdGxlQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVkaXQtbW9kYWwtYnRuJyk7XG5cbmVkaXRQcm9qZWN0VGl0bGVDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWRpdFByb2plY3RUaXRsZU1vZGFsLmNsb3NlKCk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7IFxuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgICAgZGlzcGxheVRhc2tEZXRhaWxzRm9yRWRpdGluZyhjYXRlZ29yeUlkLCB0YXNrSWQpO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrRGV0YWlsc0ZvckVkaXRpbmcoY2F0ZWdvcnlJZCwgdGFza0lkKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgY29uc3QgdGFzayA9IGNhdGVnb3J5LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICBjb25zdCBjYXRlZ29yeURyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZHJvcC1kb3duJyk7XG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pZCcpLnZhbHVlID0gdGFzay5pZDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kdWUtZGF0ZScpLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJpb3JpdHktZHJvcC1kb3duIG9wdGlvblt2YWx1ZT0nJHt0YXNrLnByaW9yaXR5fSddYCkuc2VsZWN0ZWQgPSB0cnVlO1xuICBcbiAgY2F0ZWdvcnlEcm9wRG93bkJ1dHRvbi5pbm5lckhUTUwgPSAnJztcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNhdGVnb3J5T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjYXRlZ29yeS5pZCk7XG4gICAgY2F0ZWdvcnlPcHRpb24udGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgIGNhdGVnb3J5RHJvcERvd25CdXR0b24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlPcHRpb24pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1kcm9wLWRvd24gb3B0aW9uW3ZhbHVlPScke2NhdGVnb3J5LmlkfSddYCkuc2VsZWN0ZWQgPSB0cnVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFZGl0VGFza0Zvcm1TdWJtaXNzaW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAgICBcblxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZm9ybSBmb3Igc2NvcGVcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kcm9wLWRvd24nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrSWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWlkJykudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWRyb3AtZG93bicpLnZhbHVlO1xuXG4gICAgY29uc3QgdXBkYXRlcyA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSwgLy8gTWFrZSB0aGlzIGEgcmVxdWlyZW1lbnQgaW4gVUkgY29kZVxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgZHVlRGF0ZTogZHVlRGF0ZSB8fCAnJyxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSB8fCAnbG93J1xuICAgIH07XG5cbiAgICBpZiAoY3VycmVudENhdGVnb3J5Vmlld0lkID09PSBzZWxlY3RlZENhdGVnb3J5SWQpIHtcbiAgICAgIGVkaXRUYXNrKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCwgdGFza0lkLCB1cGRhdGVzKTsgICAgICBcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCAhPT0gc2VsZWN0ZWRDYXRlZ29yeUlkKSB7XG4gICAgICBkZWxldGVUYXNrRnJvbUNhdGVnb3J5KGN1cnJlbnRDYXRlZ29yeVZpZXdJZCwgdGFza0lkKTtcbiAgICAgIGNyZWF0ZVRhc2soc2VsZWN0ZWRDYXRlZ29yeUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG4gICAgXG4gICAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICBjbGVhckZvcm1GaWVsZHMoKTsgICAgXG4gICAgcmVuZGVyVGFza3MoY3VycmVudENhdGVnb3J5Vmlld0lkLCBjYXRlZ29yaWVzKTtcbiAgfSk7XG59XG4iLCIvLyBzcmMvdXRpbHMuanNcblxuLy8gRGF0YSBzdHJ1Y3R1cmUgdG8gc3RvcmUgY2F0ZWdvcmllcyBhbmQgdGFza3NcbmV4cG9ydCBsZXQgY2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIGlkOiAnaW5ib3gnLFxuICAgIHRpdGxlOiAnSW5ib3gnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGNhdGVnb3J5OiAnaW5ib3gnLFxuICAgICAgICB0aXRsZTogJ015IGZpcnN0IHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIG15IGZpcnN0IHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0xMS0yMycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4gICAgICAgIHRpdGxlOiAnTXkgc2Vjb25kIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdQcm9qZWN0IEEnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMScsXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBEZXZlbG9wbWVudCcsXG4gICAgdGFza3M6IFtdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMicsXG4gICAgdGl0bGU6ICdQZXJzb25hbCBUYXNrcycsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgdGl0bGU6ICdNeSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBkdWVEYXRlOiAnJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWRDYXRlZ29yaWVzKCkge1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrQ2F0ZWdvcmllcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRUYXNrcyk7XG4gIH1cbiAgcmV0dXJuIFtdOy8vIFJldHVybiBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGluIGxvY2FsU3RvcmFnZSB0byBhdm9pZCBlcnJvclxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3JpZXModXBkYXRlZENhdGVnb3JpZXMpIHtcbiAgLy8gQ2xlYXIgb3V0IHRoZSB0YXNrc1xuICBjYXRlZ29yaWVzLmxlbmd0aCA9IDA7XG5cbiAgLy8gQWRkIHRoZSBuZXcgdGFza3NcbiAgdXBkYXRlZENhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBzcmMvaW5kZXguanNcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBcbiAgcmVuZGVyVGFza3MsXG4gIHJlbmRlclByb2plY3RzTGlzdCwgXG4gIGhhbmRsZUNoZWNrQm94Q2xpY2ssXG4gIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrLFxuICBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrLFxuICBoYW5kbGVJbmJveENhdGVnb3J5Q2xpY2ssXG4gIGhhbmRsZVByb2plY3RDYXRlZ29yeUNsaWNrLFxuICBoYW5kbGVDcmVhdGVUYXNrRm9ybVN1Ym1pc3Npb24sXG4gIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbixcbiAgaGFuZGxlRWRpdFRhc2tGb3JtU3VibWlzc2lvbixcbiAgaGFuZGxlRGVsZXRlUHJvamVjdEJ1dHRvbkNsaWNrLFxuICBoYW5kbGVSZW5hbWVQcm9qZWN0QnV0dG9uQ2xpY2ssXG4gIGhhbmRsZUVkaXRQcm9qZWN0VGl0bGVTYXZlQnV0dG9uLFxuICBzaG93Q3JlYXRlVGFza0Zvcm0sXG4gIGNsb3NlQ3JlYXRlVGFza0Zvcm0sXG4gIHNob3dFZGl0VGFza0Zvcm0sXG59IGZyb20gJy4vdGFza1ZpZXcuanMnO1xuXG5pbXBvcnQgeyBcbiAgY2F0ZWdvcmllcyxcbiAgZ2V0U3RvcmVkQ2F0ZWdvcmllcyxcbiAgdXBkYXRlQ2F0ZWdvcmllcyxcbiAgdXBkYXRlTG9jYWxTdG9yYWdlLFxufSBmcm9tICcuL3V0aWxzLmpzJztcblxuXG5mdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHNob3dDcmVhdGVUYXNrRm9ybSgpO1xuICBjbG9zZUNyZWF0ZVRhc2tGb3JtKCk7XG4gIHNob3dFZGl0VGFza0Zvcm0oKTtcbiAgaGFuZGxlQ3JlYXRlUHJvamVjdEZvcm1TdWJtaXNzaW9uKCk7XG4gIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbigpO1xuICBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrKCk7XG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soKTsgLy8gQ29tbWVudCBvdXQgaWYgaXNzdWVzIGFuZCB1bmNvbW1lbnQgYmVsb3dcbiAgaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soKTsgLy8gQ29tbWVudCBvdXQgaWYgaXNzdWVzIGFuZCB1bmNvbW1lbnQgYmVsb3dcbiAgaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCk7XG4gIGhhbmRsZVByb2plY3RDYXRlZ29yeUNsaWNrKCk7XG4gIGhhbmRsZUVkaXRUYXNrRm9ybVN1Ym1pc3Npb24oKTtcbiAgaGFuZGxlRGVsZXRlUHJvamVjdEJ1dHRvbkNsaWNrKCk7XG4gIGhhbmRsZVJlbmFtZVByb2plY3RCdXR0b25DbGljaygpO1xuICBoYW5kbGVFZGl0UHJvamVjdFRpdGxlU2F2ZUJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgaW4gbG9jYWxTdG9yYWdlXG4gIGxldCBzdG9yZWRDYXRlZ29yaWVzID0gZ2V0U3RvcmVkQ2F0ZWdvcmllcygpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBzdG9yZWQgdGFza3MsIHVzZSBkZWZhdWx0IHRhc2tzIGFuZCBzYXZlIHRoZW0gdG8gbG9jYWxTdG9yYWdlXG4gIGlmIChzdG9yZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICBzdG9yZWRDYXRlZ29yaWVzID0gWy4uLmNhdGVnb3JpZXNdO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0YXNrQ2F0ZWdvcmllcyBmcm9tIGxvY2FsU3RvcmFnZSBpbnN0ZWFkIG9mIHJlYXNzaWduaW5nIGl0XG4gIHVwZGF0ZUNhdGVnb3JpZXMoc3RvcmVkQ2F0ZWdvcmllcyk7XG5cbiAgcmVuZGVyUHJvamVjdHNMaXN0KHN0b3JlZENhdGVnb3JpZXMpO1xuICByZW5kZXJUYXNrcygnaW5ib3gnLCBzdG9yZWRDYXRlZ29yaWVzKTtcbiAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmluaXRpYWxpemVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=