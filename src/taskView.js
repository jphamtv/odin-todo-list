// src/taskView.js
import { 
  getTasksFromLocalStorage, 
  createTask, 
  deleteTask, 
  toggleTaskComplete, 
  myTasks
} from './taskService.js';


export function displayIncompleteTasks(tasks) {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Loop through the tasks and update the list
  tasks.forEach(task => {
    if (!task.taskComplete) {
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


export function displayAllTasks(tasks) {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Helper function to create task item elements
  const createTaskItem = (task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.taskId = task.id;
    taskItem.innerHTML = `
      <div>
        <button type="button" class="checkbox-btn${task.taskComplete ? ' checked' : ''}">
        <svg class="checkmark-icon${task.taskComplete ? ' checked' : ''}" data-task-id="${task.id}" width="24" height="24"><path d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title${task.taskComplete ? ' checked' : ''}">${task.title}</div>
          <div>
            ${!task.taskComplete ? `<button class="edit-btn" data-task-id="${task.id}">Edit</button>` : ''}
            <button class="delete-btn" data-task-id="${task.id}">Delete</button>
          </div>
        </div>
        ${task.description ? `<div class="description">${task.description}</div>` : ''}
        ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
      </div>
    `;
    return taskItem;
  };

  // Display incomplete tasks
  tasks.filter(task => !task.taskComplete).forEach(task => {
    taskList.appendChild(createTaskItem(task));
  });

  // Display completed tasks
  tasks.filter(task => task.taskComplete).forEach(task => {
    taskList.appendChild(createTaskItem(task));
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
      toggleTaskComplete(taskId);
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


// Single button for toggling the display of completed tasks
const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');

// Initial state for whether completed tasks are shown
export let showCompletedTasks = false;

export function handleToggleCompletedTasksButton() {
  toggleCompletedTasksBtn.addEventListener('click', () => {
    const tasks = getTasksFromLocalStorage();
    showCompletedTasks = !showCompletedTasks;

    if (showCompletedTasks) {
      displayAllTasks(tasks);
      toggleCompletedTasksBtn.textContent = 'Hide completed tasks';
    } else {
      displayIncompleteTasks(tasks);
      toggleCompletedTasksBtn.textContent = 'Show completed tasks';
    }
  });
}