// src/index.js

import './style.css';
import { 
  displayTasks, 
  showCreateTaskForm, 
  closeCreateTaskForm, 
  handleCreateTaskFormSubmission, 
  attachCheckBoxButtonListeners, 
  attachDeleteButtonListeners,
  handleShowCompletedTasksButton 
} from './taskView.js';


function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  handleCreateTaskFormSubmission();
  handleShowCompletedTasksButton();
}

function initializeApp() {
  displayTasks();
  initializeEventListeners();
  attachCheckBoxButtonListeners();
  attachDeleteButtonListeners();
}

initializeApp();