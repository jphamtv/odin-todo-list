// src/index.js

import './style.css';
import { 
  updateMyTasks,
  getTasksFromLocalStorage, 
  myTasks, 
  saveTasksToLocalStorage 
} from './taskService';

import { 
  displayIncompleteTasks, 
  showCreateTaskForm, 
  closeCreateTaskForm, 
  handleCreateTaskFormSubmission, 
  attachCheckBoxButtonListeners, 
  attachDeleteButtonListeners,
  handleToggleCompletedTasksButton
} from './taskView.js';


function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  handleCreateTaskFormSubmission();
  handleToggleCompletedTasksButton();
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedTasks = getTasksFromLocalStorage();

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedTasks.length === 0) {
    saveTasksToLocalStorage(myTasks);
    storedTasks = [...myTasks];
  }

  // Update the contents of myTasks instead of reassigning it
  updateMyTasks(storedTasks);

  displayIncompleteTasks(storedTasks);
  initializeEventListeners();
  attachCheckBoxButtonListeners();
  attachDeleteButtonListeners();
}

initializeApp();