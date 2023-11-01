// src/taskService.js
import { v4 as uuidv4 } from 'uuid'
import { displayTasks, clearFormFields } from "./taskView.js";

// Set the data structure to store tasks
export let myTasks = [
  { 
    id: 1,
    category: 'inbox',
    title: 'My first task', 
    description: 'Description of my first task', 
    dueDate: '10-31-2023', 
    priority: 'High', 
    taskComplete: false,
  },
  { 
    id: 2,
    category: 'inbox',
    title: 'My second task', 
    description: null, 
    dueDate: null, 
    priority: null, 
    taskComplete: false,
  },
  { 
    id: 3,
    category: 'inbox',
    title: 'My third task', 
    description: null, 
    dueDate: null, 
    priority: null, 
    taskComplete: false,
  },
]

// Function to create tasks
class Task {
  constructor(id, category, title, description, dueDate, priority, taskComplete = false) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskComplete = taskComplete;
  }
}


// Function to create tasks
export function createTask(category, title, description, dueDate, priority, taskComplete) {

  // Generate unique ID for the task
  const id = uuidv4();

  // Create a new task using the Task class
  const task = new Task(id, category, title, description, dueDate, priority, taskComplete);

  // Add task to the database
  myTasks.push(task)

  // Update the UI
  displayTasks();

  // Clear the form fields
  clearFormFields();
}



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