// src/index.js

import './style.css';
import { displayTasks, showCreateTaskForm, closeCreateTaskForm, handleCreateTaskFormSubmission } from './taskView.js';


// Initialize the task list UI
displayTasks();

// Initialize the form to create tasks
showCreateTaskForm();
closeCreateTaskForm();
handleCreateTaskFormSubmission();