// src/taskView.js
import { 
  getTasksFromLocalStorage, 
  createProject,
  createTask, 
  deleteTask, 
  toggleTaskComplete, 
  myTasks,
  getTaskDetails,
} from './taskService.js';


export function displayProjects(projects) {
  // Get a reference to the project list element
  const projectList = document.querySelector('#project-list');
  
  // Clear the project list
  projectList.innerHTML = '';
  
  // Loop through the tasks and update the list
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    
    // Set the index number to the data-task-id attribute
    projectItem.dataset.projectId = project.id;
    
    // HTML structure of the new task item
    projectItem.innerHTML = `
    <div class="project-item">
      <svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg>
      <div>${project.title}</div>
    </div>
    `;
    
    // Add the new task item
    projectList.appendChild(projectItem);    
  });
}


export function displayIncompleteTasks(tasks) {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Loop through the tasks and update the list
  tasks.forEach(task => {
    if (!task.isComplete) {
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
            <button class="edit-btn btn" data-task-id="${task.id}">Edit</button>
            <button class="delete-btn btn" data-task-id="${task.id}">Delete</button>
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
        <button type="button" class="checkbox-btn${task.isComplete ? ' checked' : ''}">
        <svg class="checkmark-icon${task.isComplete ? ' checked' : ''}" data-task-id="${task.id}" width="24" height="24"><path d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title${task.isComplete ? ' checked' : ''}">${task.title}</div>
          <div>
            ${!task.isComplete ? `<button class="edit-btn" data-task-id="${task.id}">Edit</button>` : ''}
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
  tasks.filter(task => !task.isComplete).forEach(task => {
    taskList.appendChild(createTaskItem(task));
  });

  // Display completed tasks
  tasks.filter(task => task.isComplete).forEach(task => {
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
    console.log('clicked');
    console.log(title);

    // Refocus the title input field
    document.querySelector('#title').focus(); 
  });
}


export function handleCreateProjectFormSubmission() {
  document.querySelector('#create-project-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get values from the form fields
    const title = document.querySelector('#project-title-input').value;
  
    // Create a new project and add it to the database
    createProject(title);

    // Clear fields and close the modal
    clearFormFields();
    projectDialog.close();
  });
}

export function clearFormFields() {
  document.querySelector('#create-task').reset();
  document.querySelector('#create-project-form').reset();
  document.querySelector('#edit-task').reset();
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
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 

    // Check if add task form is open and visible
    const addTaskForm = document.querySelector('.form-container');
    const addTaskSubmitButton = document.querySelector('.submit-btn');
    
    // Check if the add project modal is open and visible
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectSubmitButton = document.querySelector('.add-project-to-list');

    if (getComputedStyle(addTaskForm).display !== 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    }
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

      // Update isComplete property
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

      // Update isComplete property
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


// Attach event listeners to show and close project modal
const projectDialog = document.querySelector('#add-project-modal');
const showAddProjectModalButton = document.querySelector('.add-project-btn');
const closeProjectModalButton = document.querySelector('.close-modal-btn');

showAddProjectModalButton.addEventListener('click', () => {
  projectDialog.showModal();
});

closeProjectModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  clearFormFields();
  projectDialog.close();
});


const editTaskDialog = document.querySelector('#edit-task-modal');
const closeEditTaskModalButton = document.querySelector('.cancel-edit-btn');

closeEditTaskModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  editTaskDialog.close();
});


export function showEditTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('#task-list');
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-btn')) {
        editTaskDialog.showModal();    

        // Get the task ID 
        const taskId = event.target.dataset.taskId;
        console.log(taskId);
        displayTaskDetails(taskId);
      }
    });  
  });
}

function displayTaskDetails(taskId) {
  // Get a reference to the task list element
  const editTaskForm = document.querySelector('#edit-task');

  const task = getTaskDetails(taskId);
  console.log(task);
  
  // Clear the task list
  editTaskForm.innerHTML = `
    <input type="text" id="edit-title" placeholder="Title" value="${task.title}" />
    <textarea id="edit-description" placeholder="Description">${task.description}</textarea>
    <div class="form-options">
      <input type="date" id="due-date" value="${task.dueDate}" />
      <select name="priority" id="priority">
        <option value="priority-1">Priority 1</option>
        <option value="priority-2">Priority 2</option>
        <option value="priority-3">Priority 3</option>
        <option value="priority-4" selected>Priority 4</option>
      </select>
      <select name="project" id="project">
        <option value="inbox" selected>Inbox</option>
      </select>
    </div>
    <footer class="form-footer">
      <div class="form-btns">
        <button class="cancel-edit-btn btn">Cancel</button>
        <button class="submit-btn" type="submit">Save</button>
      </div>
    </footer>
  `;
}