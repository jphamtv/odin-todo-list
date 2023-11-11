// src/index.js

import './style.css';
import { 
  updateMyTasks,
  myTasks, 
  getTasksFromLocalStorage, 
  saveTasksToLocalStorage,
  getProjectsFromLocalStorage,
  saveProjectsToLocalStorage,
  myProjects,
  updateMyProjects, 
} from './taskService';

import { 
  displayProjects,
  displayIncompleteTasks, 
  showCreateTaskForm, 
  closeCreateTaskForm, 
  showEditTaskForm,
  handleCreateTaskFormSubmission, 
  handleCreateProjectFormSubmission,
  attachCheckBoxButtonListeners, 
  attachDeleteButtonListeners,
  handleToggleCompletedTasksButton
} from './taskView.js';


function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  showEditTaskForm();
  handleCreateProjectFormSubmission();
  handleCreateTaskFormSubmission();
  handleToggleCompletedTasksButton();
  attachCheckBoxButtonListeners(); // Comment out if issues and uncomment below
  attachDeleteButtonListeners(); // Comment out if issues and uncomment below
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedTasks = getTasksFromLocalStorage();
  let storedProjects = getProjectsFromLocalStorage();

  // If there are no stored projects, use default projects and save them to localStorage
  if (storedProjects.length === 0) {
    saveProjectsToLocalStorage(myProjects);
    storedProjects = [...myProjects];
  }

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedTasks.length === 0) {
    saveTasksToLocalStorage(myTasks);
    storedTasks = [...myTasks];
  }

  // Update the contents of myProjects instead of reasigning it
  updateMyProjects(storedProjects);

  // Update the contents of myTasks instead of reassigning it
  updateMyTasks(storedTasks);

  displayProjects(storedProjects);
  displayIncompleteTasks(storedTasks);
  initializeEventListeners();
  // attachCheckBoxButtonListeners();
  // attachDeleteButtonListeners();
}

initializeApp();