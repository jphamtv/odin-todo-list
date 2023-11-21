// src/index.js
import './style.css';

// Task view handlers
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
  handleRenameProjectButtonClick,
  handleEditProjectTitleSaveButton,
  showCreateTaskForm,
  closeCreateTaskForm,
  showEditTaskForm,
} from './taskView.js';

// Utility functions for managing categories/tasks and local storage
import { 
  categories,
  getStoredCategories,
  updateCategories,
  updateLocalStorage,
} from './utils.js';

/**
 * Sets up event listeners for various user interactions.
 */
function initializeEventListeners() {
  showCreateTaskForm();
  closeCreateTaskForm();
  showEditTaskForm();
  handleCreateProjectFormSubmission();
  handleCreateTaskFormSubmission();
  handleToggleCompletedTasksButtonClick();
  handleCheckBoxClick(); 
  handleDeleteButtonClick(); 
  handleInboxCategoryClick();
  handleProjectCategoryClick();
  handleEditTaskFormSubmission();
  handleDeleteProjectButtonClick();
  handleRenameProjectButtonClick();
  handleEditProjectTitleSaveButton();
}

/**
 * Initializes the application by loading categories, rendering tasks and projects,
 * and setting up event listeners.
 */
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

  // Initial rendering of projects and tasks
  renderProjectsList(storedCategories);
  renderTasks('inbox', storedCategories);

  // Initialize all event listeners for user interactions
  initializeEventListeners();
}

// Start the application
initializeApp();