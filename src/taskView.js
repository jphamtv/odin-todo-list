// src/taskView.js

import { myTasks, createTask, deleteTask, markTaskComplete } from './taskService.js';


export function displayTasks() {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Loop through the tasks and update the list
  myTasks.forEach(task => {
    if (task.taskComplete === false) {
      const taskItem = document.createElement('li');
      
      // Add task-item class attribute
      taskItem.classList.add('task-item');
      
      // Set the index number to the data-task-id attribute
      taskItem.dataset.taskId = task.id;
      
      // HTML structure of the new task item
      taskItem.innerHTML = `
      <div>
        <button type="button" class="checkbox-btn">
        <svg class="checkmark-icon" data-task-id="${task.id}" width="24" height="24"><path fill="#fff" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title">${task.title}</div>
          <div>
            <button class="edit-btn" data-task-id="${task.id}">Edit</button>
            <button class="delete-btn" data-task-id="${task.id}">Delete</button>
          </div>
        </div>
        ${task.description ? `<div class="description">${task.description}</div>` : ''}
        ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
      </div>
      `;
      
      // Add the new task item
      taskList.appendChild(taskItem);    
    }
  });
}


export function handleCreateTaskFormSubmission() {
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
    createTask(category, title, description, dueDate, priority);

    // Refocus the title input field
    document.querySelector('#title').focus(); 
  });
}


export function clearFormFields() {
  const category = document.querySelector('#project').value = 'inbox';
  const title = document.querySelector('#title').value = '';
  const description = document.querySelector('#description').value = '';
  const dueDate = document.querySelector('#due-date').value = '';
  const priority = document.querySelector('#priority').value = 'priority-4';
}


export function showCreateTaskForm() {
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
document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 
      document.querySelector('.submit-btn').click(); 
  }
});


export function closeCreateTaskForm() {
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


export function attachCheckBoxButtonListeners() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkmark-icon')) {
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update taskComplete property
      markTaskComplete(taskId);
    }
  });
}


export function attachDeleteButtonListeners() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update taskComplete property
      deleteTask(taskId);
    }
  });
}


export function showCompletedTasks() {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  displayTasks();
  
  // Loop through the tasks and update the list
  myTasks.forEach(task => {
    if (task.taskComplete === true) {
      const taskItem = document.createElement('li');
      
      // Add task-item class attribute
      taskItem.classList.add('task-item');
      
      // Set the index number to the data-task-id attribute
      taskItem.dataset.taskId = task.id;
      
      // HTML structure of the new task item
      taskItem.innerHTML = `
      <div>
        <button type="button" class="checkbox-btn checked">
        <svg class="checkmark-icon checked" data-task-id="${task.id}" width="24" height="24"><path d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title checked">${task.title}</div>
          <button class="delete-btn" data-task-id="${task.id}">Delete</button>
        </div>
        ${task.description ? `<div class="description">${task.description}</div>` : ''}
        ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
      </div>
      `;
      
      // Add the new task item
      taskList.appendChild(taskItem);    
    }
  });
}

const showCompletedTasksBtn = document.querySelector('.show-completed-tasks-btn');
const hideCompletedTasksBtn = document.querySelector('.hide-completed-tasks-btn');

export function handleShowCompletedTasksButton() {
  showCompletedTasksBtn.addEventListener('click', () => {
    showCompletedTasks();

    showCompletedTasksBtn.style.display = 'none';
    hideCompletedTasksBtn.style.display = 'block';
    handleHideCompletedTasksButton();
  });
}


function handleHideCompletedTasksButton() {
  hideCompletedTasksBtn.addEventListener('click', () => {
    displayTasks();
    
    hideCompletedTasksBtn.style.display = 'none';
    showCompletedTasksBtn.style.display = 'block';
  });
}
