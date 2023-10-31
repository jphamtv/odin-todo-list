// src/index.js

import './style.css';


// Set the data structure to store tasks
let myTasks = [
  { 
    category: 'Inbox',
    title: 'My first task', 
    description: 'Description of my first task', 
    dueDate: '2023-10-30', 
    priority: 'high', 
    completeStatus: 'not completed'
  }
]

// Function to create tasks
class Task {
  constructor(category, title, description, dueDate, priority, completeStatus) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completeStatus = completeStatus;
  }
}

// Function to create tasks
function createTask(category, title, description, dueDate, priority, completeStatus) {
  
  const task = new Task(category, title, description, dueDate, priority, completeStatus);

  myTasks.push(task)

  // Update the UI
  displayTasks();
}

function displayTasks() {
  //
}


// Function to delete tasks
function deleteTask() {

}


// Function to mark tasks as complete
function toggleTaskCompletion() {

}


// Function to edit a task
function editTask() {

}


// Function to change priority of a task
function setPriority() {

}
