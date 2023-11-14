// src/index.js

import './style.css';
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


import { 
  renderIncompleteTasks, 
  renderProjectsList, 
  handleCheckBoxClick,
  handleDeleteButtonClick,
  handleToggleCompletedTasksButtonClick,
  handleInboxCategoryClick,
  handleProjectCategoryClick,
} from './taskView.js';

import { 
  categories,
  getStoredTasks,
  updateCategories,
  updateLocalStorage,
} from './utils.js';


function initializeEventListeners() {
//   showCreateTaskForm();
//   closeCreateTaskForm();
//   showEditTaskForm();
//   handleCreateProjectFormSubmission();
//   handleCreateTaskFormSubmission();
  handleToggleCompletedTasksButtonClick();
  handleCheckBoxClick(); // Comment out if issues and uncomment below
  handleDeleteButtonClick(); // Comment out if issues and uncomment below
  handleInboxCategoryClick();
  handleProjectCategoryClick();
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedTasks = getStoredTasks();

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedTasks.length === 0) {
    updateLocalStorage(categories);
    storedTasks = [...categories];
  }

  // Update the contents of myTasks instead of reassigning it
  updateCategories(storedTasks);

  renderProjectsList(storedTasks);
  renderIncompleteTasks('inbox', storedTasks);
  initializeEventListeners();
}

initializeApp();