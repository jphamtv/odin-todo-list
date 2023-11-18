// src/index.js
import './style.css';

import { 
  renderTasks,
  renderProjectsList, 
  handleCheckBoxClick,
  handleDeleteButtonClick,
  handleToggleCompletedTasksButtonClick,
  handleInboxCategoryClick,
  handleProjectCategoryClick,
  handleCreateTaskFormSubmission,
  handleCreateProjectFormSubmission,
  handleEditTaskFormSubmission,
  handleDeleteProjectButtonClick,
  showCreateTaskForm,
  closeCreateTaskForm,
  showEditTaskForm,
} from './taskView.js';

import { 
  categories,
  getStoredCategories,
  updateCategories,
  updateLocalStorage,
} from './utils.js';


function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  showEditTaskForm();
  handleCreateProjectFormSubmission();
  handleCreateTaskFormSubmission();
  handleToggleCompletedTasksButtonClick();
  handleCheckBoxClick(); // Comment out if issues and uncomment below
  handleDeleteButtonClick(); // Comment out if issues and uncomment below
  handleInboxCategoryClick();
  handleProjectCategoryClick();
  handleEditTaskFormSubmission();
  handleDeleteProjectButtonClick();
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedCategories = getStoredCategories();

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedCategories.length === 0) {
    updateLocalStorage(categories);
    storedCategories = [...categories];
  }

  // Update the contents of taskCategories from localStorage instead of reassigning it
  updateCategories(storedCategories);

  renderProjectsList(storedCategories);
  renderTasks('inbox', storedCategories);
  initializeEventListeners();
}

initializeApp();