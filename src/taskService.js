// src/taskService.js
import { v4 as uuidv4 } from 'uuid'
import { 
  displayIncompleteTasks, 
  clearFormFields, displayAllTasks, 
  attachCheckBoxButtonListeners,
  showCompletedTasks 
} from "./taskView.js";

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

export function updateMyTasks(newTasks) {
  // Clear out the tasks
  myTasks.length = 0;

  // Add the new tasks
  newTasks.forEach(task => myTasks.push(task));
}


export function saveTasksToLocalStorage(myTasks) {
  localStorage.setItem('tasks', JSON.stringify(myTasks));
}


export function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return []; // Return empty array if nothing in localStorage
}


function findTaskById(taskId) {
  return myTasks.find(task => task.id === taskId);
}


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
  saveTasksToLocalStorage(myTasks);

  // Update the UI
  displayIncompleteTasks(myTasks);

  // Clear the form fields
  clearFormFields();
}


// Function to delete tasks by their unique ID
export function deleteTask(taskId) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasksToLocalStorage(updatedTasks);

  if (!showCompletedTasks) {
    displayIncompleteTasks(updatedTasks);
  } else {
    displayAllTasks(updatedTasks);
  }
}



export function markTaskComplete(taskId) {
  // Operate on the latest tasks array from localStorage
  const tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].taskComplete = true;
  
    saveTasksToLocalStorage(tasks);
    displayIncompleteTasks(tasks);

  } else {
    console.error('Task not found');
  }  
}


export function undoTaskComplete() {
  const tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  // Update the taskComplete status to false
  if (taskIndex !== -1) {
    tasks[taskIndex].taskComplete = false;
  
    saveTasksToLocalStorage(tasks);
    displayAllTasks(tasks);

  } else {
    console.error('Task not found');
  }
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

  displayIncompleteTasks();
}