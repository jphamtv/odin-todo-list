// src/taskView.js
// import { 
//   getTasksFromLocalStorage, 
//   createProject,
//   createTask, 
//   deleteTask, 
//   toggleTaskComplete, 
//   myTasks,
//   getTaskDetails,
// } from './taskService.js';

import {
  createCategory,
  createTask,
  deleteCategory,
  deleteTaskFromCategory,
  editCategory,
  editTask,
  toggleTaskStatus,
} from './taskService.js';
import { categories } from './utils.js';

export function renderProjectsList(categories) {
  // Get a reference to the project list element
  const projectList = document.querySelector('#project-list');
  
  // Clear the project list
  projectList.innerHTML = '';
  
  categories.forEach(category => {
    if (category.id !== 'inbox') {
      const li = document.createElement('li');
      li.classList.add('project-item');
      li.dataset.categoryId = category.id;
  
      const categoryItemButton = document.createElement('button');
      categoryItemButton.classList.add('project-button');
      categoryItemButton.dataset.categoryId = category.id;
      
      categoryItemButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg>`
      const textNode = document.createTextNode(category.title);
      categoryItemButton.appendChild(textNode);
      li.appendChild(categoryItemButton);
      projectList.appendChild(li);
    }
  });
}

// Initial state for category view
let currentCategoryViewId = 'inbox';

// Initial state for whether completed tasks are shown
let showCompletedTasks = false;

export function handleInboxCategoryClick() {
  const inboxOptionElement = document.querySelector('.inbox-button');
  inboxOptionElement.addEventListener('click', () => {
    const categoryId = inboxOptionElement.dataset.categoryId;
    const category = categories.find(category => category.id === categoryId);
    const categoryHeaderTitle = document.querySelector('.category-title');

    if (currentCategoryViewId !== categoryId) {
      currentCategoryViewId = categoryId;
      categoryHeaderTitle.textContent = category.title;

      document.querySelectorAll('.project-button').forEach(button => {
        button.classList.remove('current');
      });

      inboxOptionElement.classList.add('current');

      // renderIncompleteTasks(categoryId, categories);
      renderTasks(categoryId, categories);
    }
  });
}

export function handleProjectCategoryClick() {
  const projectListElement = document.querySelector('#project-list');
  projectListElement.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('project-button')) {
      const categoryId = event.target.dataset.categoryId;
      const category = categories.find(category => category.id === categoryId);
      const categoryHeaderTitle = document.querySelector('.category-title');

      if (currentCategoryViewId !== categoryId) {
        currentCategoryViewId = categoryId;
        categoryHeaderTitle.textContent = category.title;

        document.querySelectorAll('.project-button').forEach(button => {
          button.classList.remove('current');
        });

        document.querySelector('.inbox-button').classList.remove('current');

        event.target.classList.add('current');

        // renderIncompleteTasks(categoryId, categories);
        renderTasks(categoryId, categories);
      }
    }
  });
}


// export function renderIncompleteTasks(categoryId, categories) {
//   const category = categories.find(category => category.id === categoryId);

//   if (category) {
//     const taskList = document.querySelector('#task-list');
//     taskList.innerHTML = '';

//     // Display incomplete tasks
//     category.tasks.filter(task => !task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
//   }
// }

// export function renderAllTasks(categoryId, categories) {
//   const category = categories.find(category => category.id === categoryId);
//   if (category) {
//     // Get a reference to the task list element
//     const taskList = document.querySelector('#task-list');
    
//     // Clear the task list
//     taskList.innerHTML = '';
    
//     // Display incomplete tasks
//     category.tasks.filter(task => !task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
  
//     // Display completed tasks
//     category.tasks.filter(task => task.isComplete).forEach(task => {
//       const taskItem = createTaskItemElement(task);
//       taskList.appendChild(taskItem);
//     });
//   }
// }


export function renderTasks(categoryId, categories) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    // Get a reference to the task list element
    const taskList = document.querySelector('#task-list');
    
    // Clear the task list
    taskList.innerHTML = '';

    if (showCompletedTasks) {
      // Display incomplete tasks…
      category.tasks.filter(task => !task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });    
      // …then display completed tasks
      category.tasks.filter(task => task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });    

    } else {
      // Display incomplete tasks only
      category.tasks.filter(task => !task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });
    }    
  }
}


function createTaskItemElement(task) {
  const taskItemElement = document.createElement('li');            
  taskItemElement.classList.add('task-item');           
  taskItemElement.dataset.taskId = task.id; 
  
  // CHECKBOX ELEMENTS 
  const checkBoxDiv = document.createElement('div');
  const checkBoxButton = document.createElement('button');
  checkBoxButton.classList.add('checkbox-btn');        
  if (task.isComplete) {
    checkBoxButton.classList.add('checked');
  }
  checkBoxButton.innerHTML += `<svg class="checkmark-icon${task.isComplete ? ' checked' : ''}" data-task-id="${task.id}" width="24" height="24"><path fill="#fff" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>`        
  checkBoxDiv.appendChild(checkBoxButton);
  
  // TASK ELEMENTS
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-content');                
  
  // Title
  const titleWrapperDiv = document.createElement('div');
  titleWrapperDiv.classList.add('task-title-wrapper');                
  
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  if (task.isComplete) {
    titleDiv.classList.add('checked');
  }
  titleDiv.textContent = task.title;
  
  // Edit and Delete buttons
  const buttonsDiv = document.createElement('div');
  let editButton = '';
  if (!task.isComplete) {
    editButton = createButton('Edit', 'edit-btn', task.id);  
  }              
  const deleteButton = createButton('Delete', 'delete-btn', task.id);                
  
  buttonsDiv.append(editButton, deleteButton);
  titleWrapperDiv.append(titleDiv, buttonsDiv);        
  taskDiv.appendChild(titleWrapperDiv);

  // Description
  if (task.description) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = task.description;
    taskDiv.appendChild(descriptionDiv);
  }

  // Due date
  if (task.dueDate) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('due-date');
    dueDateDiv.textContent = task.dueDate;
    taskDiv.appendChild(dueDateDiv);
  }
  
  taskItemElement.append(checkBoxDiv, taskDiv);    
  
  return taskItemElement;
}


function createButton(text, className, taskId) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className, 'btn');
  button.dataset.taskId = taskId;
  return button;
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


export function handleCheckBoxClick() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkmark-icon')) {
      
      // Get the category ID
      const categoryId = currentCategoryViewId;

      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      toggleTaskStatus(categoryId, taskId);

      renderTasks(categoryId, categories);
    }
  });
}


export function handleDeleteButtonClick() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {

      // Get the category ID
      const categoryId = currentCategoryViewId;
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      deleteTaskFromCategory(categoryId, taskId);

      renderTasks(categoryId, categories);
    }
  });
}


// Single button for toggling the display of completed tasks
const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');


export function handleToggleCompletedTasksButtonClick() {
  toggleCompletedTasksBtn.addEventListener('click', () => {
    const categoryId = currentCategoryViewId;
    showCompletedTasks = !showCompletedTasks;
    if (showCompletedTasks) {
      toggleCompletedTasksBtn.textContent = 'Hide completed tasks';
    } else {
      toggleCompletedTasksBtn.textContent = 'Show completed tasks';
    }
    renderTasks(categoryId, categories);
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