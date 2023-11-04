// src/index.js

import './style.css';
import { displayTasks, showCreateTaskForm, closeCreateTaskForm, handleCreateTaskFormSubmission, attachCheckBoxButtonListeners } from './taskView.js';


function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  handleCreateTaskFormSubmission();
}

function initializeApp() {
  displayTasks();
  initializeEventListeners();
  attachCheckBoxButtonListeners();
}

initializeApp();