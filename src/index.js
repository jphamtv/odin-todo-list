// src/index.js

import './style.css';


// Set the data structure to store tasks
let myTasks = [
  { 
    category: 'Inbox',
    title: 'My first task', 
    description: 'Description of my first task', 
    dueDate: '10-31-2023', 
    priority: 'High', 
    taskComplete: false,
  },
  { 
    category: 'Inbox',
    title: 'My second task', 
    description: null, 
    dueDate: null, 
    priority: null, 
    taskComplete: false,
  },
  { 
    category: 'Inbox',
    title: 'My third task', 
    description: null, 
    dueDate: null, 
    priority: null, 
    taskComplete: false,
  },
]

// Function to create tasks
class Task {
  constructor(category, title, description, dueDate, priority, taskComplete) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskComplete = taskComplete;
  }
}

// Function to create tasks
function createTask(category, title, description, dueDate, priority, taskComplete) {
  
  // Create a new task using the Task class
  const task = new Task(category, title, description, dueDate, priority, taskComplete);

  myTasks.push(task)

  // Update the UI
  displayTasks();

  // Clear the form fields

}

function displayTasks() {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');

  // Clear the task list
  taskList.innerHTML = '';

  // Loop through the tasks and update the list
  myTasks.forEach(task => {
    const taskItem = document.createElement('li');
    
    // Add task-item class attribute
    taskItem.classList.add('task-item');
    console.log(taskItem);

    // Set the index number to the data-task-id attribute
    
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

// Initialize the task list UI
displayTasks();


// Function to delete tasks
function deleteTask() {

}


// Function to mark tasks as complete
function toggleTaskCompletion() {

}


// Function to update a task
function updateTask() {

}


// Function to change priority of a task
function setPriority() {

}
