// src/taskView.js

import { myTasks, createTask } from './taskService.js';


export function displayTasks() {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Loop through the tasks and update the list
  myTasks.forEach(task => {
    const taskItem = document.createElement('li');
    
    // Add task-item class attribute
    taskItem.classList.add('task-item');
    
    // Set the index number to the data-task-id attribute
    taskItem.dataset.taskId = task.id;
    
    // HTML structure of the new task item
    taskItem.innerHTML = `
    <div>
    <button type="button" class="checkbox-btn">
    <svg class="checkmark-icon" width="24" height="24"><path fill="#fff" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
    </button>
    </div>
    <div>
    <div class="title">${task.title}</div>
    ${task.description ? `<div class="description">${task.description}</div>` : ''}
    ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
    </div>
    `;
    
    // Add the new task item
    taskList.appendChild(taskItem);
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
    const createTaskFormElement = document.querySelector('form-container');
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.addEventListener('click', () => {
      createTaskFormElement.style.display = 'block';
      addTaskButton.style.display = 'none';
    });  
  });
}

export function closeCreateTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const createTaskFormElement = document.querySelector('form-container');
    const addTaskButton = document.querySelector('.add-task-btn');
    querySelector('.cancel-btn').addEventListener('click', () => {
      createTaskFormElement.style.display = 'none';
      addTaskButton.style.display = 'flex';
    });  
  });
}

