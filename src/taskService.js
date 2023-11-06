// src/taskService.js
import { v4 as uuidv4 } from 'uuid'
import { displayTasks, clearFormFields, showCompletedTasks, attachCheckBoxButtonListeners } from "./taskView.js";

// Set the data structure to store tasks
export let myTasks = [
  { 
    id: '1',
    category: 'inbox',
    title: 'My first task', 
    description: 'Description of my first task', 
    dueDate: '10-31-2023', 
    priority: 'High', 
    taskComplete: false,
  },
  { 
    id: '2',
    category: 'inbox',
    title: 'My second task', 
    description: null, 
    dueDate: null, 
    priority: null, 
    taskComplete: false,
  },
  { 
    id: '3',
    category: 'Project A',
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


export function createTask(category, title, description, dueDate, priority, taskComplete) {

  // Generate unique ID for the task
  const id = uuidv4();

  // Create a new task using the Task class
  const task = new Task(id, category, title, description, dueDate, priority, taskComplete);

  myTasks.push(task)

  // Update the UI
  displayTasks();

  // Clear the form fields
  clearFormFields();
}



// Function to delete tasks by their unique ID
export function deleteTask(taskId) {
  myTasks = myTasks.filter(task => task.id !== taskId);
  displayTasks();
}


export function markTaskComplete(taskId) {
  const selectedTask = myTasks.find(task => task.id === taskId);
  
  // Update the taskComplete status to true
  if (selectedTask) {
    selectedTask.taskComplete = true;  
  } else {
    console.error('Task not found');
  }
  
  displayTasks();
}


export function undoTaskComplete() {
  const selectedTask = myTasks.find(task => task.id === taskId);
  
  // Update the taskComplete status to false
  if (selectedTask) {
    selectedTask.taskComplete = false;  
  }
  
  showCompletedTasks();
}


// Function to update a task
function updateTask() {

}


export function setPriorityLevel(taskId, selectedPriority) {
  const selectedTask = myTasks.find(task => task.id === taskId);

  // Update the priority level of the selected task
  if (selectedTask) {
    selectedTask.priority = selectedPriority;
  } else {
    console.error('Task not found');
  }

  displayTasks();
}