// src/taskView.js
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

// Initial state for category view
let currentCategoryViewId = 'inbox';

// Initial state for whether completed tasks are shown
let showCompletedTasks = false;


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

      const moreOptionsMenu = createMoreOptionsMenu(category.id);
      
      const textNode = document.createTextNode(category.title);
      categoryItemButton.appendChild(textNode);
      li.append(categoryItemButton, moreOptionsMenu);
      projectList.appendChild(li);
    }
  });
}


function createMoreOptionsMenu(categoryId) {
  const moreOptionsMenu = document.createElement('div');
  moreOptionsMenu.classList.add('more-options-menu');
  moreOptionsMenu.dataset.categoryId = categoryId;

  const moreOptionsToggle = document.createElement('button');
  moreOptionsToggle.classList.add('more-options-toggle');
  moreOptionsToggle.textContent = '•••'

  const moreOptionsContent = document.createElement('div');
  moreOptionsContent.classList.add('more-options-content');

  const renameOption = document.createElement('button');
  renameOption.classList.add('rename-option');
  renameOption.dataset.categoryId = categoryId;
  renameOption.textContent = 'Rename';

  const deleteOption = document.createElement('button');
  deleteOption.classList.add('delete-option');
  deleteOption.dataset.categoryId = categoryId;
  deleteOption.textContent = 'Delete';

  moreOptionsContent.append(renameOption, deleteOption);
  moreOptionsMenu.append(moreOptionsToggle, moreOptionsContent);

  // Event listener to toggle the menu
  moreOptionsToggle.addEventListener('click', () => {
    moreOptionsContent.classList.toggle('show');
    moreOptionsToggle.style.color = '#fff';
  });

  // Event listener to close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!moreOptionsMenu.contains(event.target) && !moreOptionsToggle.contains(event.target)) {
      moreOptionsContent.classList.remove('show');
      moreOptionsToggle.style.color = '';
    }
  }, true);

  return moreOptionsMenu;
}


export function handleInboxCategoryClick() {
  const inboxOptionElement = document.querySelector('.inbox-button');
  inboxOptionElement.addEventListener('click', () => {
    const categoryId = inboxOptionElement.dataset.categoryId;
    const category = categories.find(category => category.id === categoryId);
    const categoryHeaderTitle = document.querySelector('.category-title');

    if (currentCategoryViewId !== categoryId) {
      currentCategoryViewId = categoryId;
      categoryHeaderTitle.textContent = category.title;

      document.querySelectorAll('.more-options-menu').forEach(dropdown => {
        dropdown.classList.remove('show');
      });

      document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('current');
      });

      inboxOptionElement.classList.add('current');

      // Close the create task form
      const createTaskFormElement = document.querySelector('.form-container');
      const addTaskButton = document.querySelector('.add-task-btn');
      if (getComputedStyle(createTaskFormElement).display !== 'flex') {
        createTaskFormElement.style.display = 'none';
        addTaskButton.style.display = 'flex';
        clearFormFields();
      } 

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

        document.querySelectorAll('.project-item').forEach(item => {
          item.classList.remove('current');
        });

        // Handle more options dropdown menu
        document.querySelectorAll('.more-options-menu').forEach(dropdown => {
          dropdown.classList.remove('show');
        });

        const moreOptionsMenu = document.querySelector(`.more-options-menu[data-category-id='${categoryId}']`);
        moreOptionsMenu.classList.add('show');    

        // document.querySelector('.project-item').classList.remove('current');
        document.querySelector('.inbox-button').classList.remove('current');

        const projectLi = document.querySelector(`.project-item[data-category-id='${categoryId}']`);
        projectLi.classList.add('current');
        // event.target.classList.add('current');

        // Close the create task form
        const createTaskFormElement = document.querySelector('.form-container');
        const addTaskButton = document.querySelector('.add-task-btn');
        if (getComputedStyle(createTaskFormElement).display !== 'flex') {
          createTaskFormElement.style.display = 'none';
          addTaskButton.style.display = 'flex';
          clearFormFields();
        } 
        
        renderTasks(categoryId, categories);
      }
    }
  });
}


export function handleDeleteProjectButtonClick() {
  const projectListElement = document.querySelector('#project-list');
  const deleteConfirmationModal = document.querySelector('#delete-confirmation-modal');
  const confirmButton = document.querySelector('#confirm-delete-btn');
  const cancelButton = document.querySelector('#cancel-delete-btn');
  const moreOptionsToggle = document.querySelector('.more-options-toggle');
  
  projectListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-option')) {
      const categoryId = event.target.dataset.categoryId;
      
      // Find the closest menu content related to clicked delete option
      const moreOptionsContent = event.target.closest('.more-options-content');

      deleteConfirmationModal.showModal();

      if (moreOptionsContent) {
        moreOptionsContent.classList.remove('show');
        moreOptionsToggle.style.color = '';      
      }
      
      // Set up one-time event listener for the confirm button
      confirmButton.addEventListener('click', () => {
        deleteCategory(categoryId);
        deleteConfirmationModal.close();
        renderProjectsList(categories);
        triggerInboxButtonClick();      
      });

      // Cancel deletion
      cancelButton.addEventListener('click', () => {
        deleteConfirmationModal.close();
      });
    }
  });
}


function handleRenameProjectButtonClick() {
  const projectListElement = document.querySelector('#project-list');
  const editProjectTitleModal = document.querySelector('#edit-project-title-modal');
  projectListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('rename-option')) {
      const categoryId = event.target.dataset.categoryId;

      editProjectTitleModal.showModal();
    }
  });
}



function triggerInboxButtonClick() {
  const inboxOptionButton = document.querySelector('.inbox-button');
  if (inboxOptionButton) {
    inboxOptionButton.click();
  } else {
    console.error('Inbox button not found');
  }
}


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
  checkBoxDiv.classList.add('checkbox-wrapper');
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
    editButton = createTaskButton('Edit', 'edit-btn', task.id);  
  }              
  const deleteButton = createTaskButton('Delete', 'delete-btn', task.id);                
  
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


function createTaskButton(text, className, taskId) {
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
    
    // Set the category ID to the current view
    const categoryId = currentCategoryViewId;
    
    // Reference to the form for scope
    const form = event.currentTarget;

    // Get values from the form fields
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const dueDate = form.querySelector('#due-date').value;
    const priority = form.querySelector('.priority-drop-down').value;
    
    // Create a new task object and add it to the database
    createTask(categoryId, title, description, dueDate, priority);
    clearFormFields();

    renderTasks(categoryId, categories);

    // Refocus the title input field
    form.querySelector('#title').focus(); 
  });
}


export function handleCreateProjectFormSubmission() {
  document.querySelector('#create-project-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get values from the form fields
    const title = document.querySelector('#project-title-input').value;
  
    // Create a new project and add it to the database
    createCategory(title);

    renderProjectsList(categories);

    // Clear fields and close the modal
    clearFormFields();
    projectDialog.close();

    const categoryId = categories[categories.length - 1].id;
    
    triggerNewCategoryButtonClick(categoryId);
  });
}


function triggerNewCategoryButtonClick(categoryId) {
  const newProjectButton = document.querySelector(`.project-button[data-category-id='${categoryId}']`);
  if (newProjectButton) {
    newProjectButton.click();
  } else {
    console.error('New category button not found');
  }
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


// Change behavior of the return key to programmatically click the 'submit' btn.
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 

    // Check if add task form is open and visible
    const addTaskForm = document.querySelector('.form-container');
    const addTaskSubmitButton = document.querySelector('.submit-btn');

    // Check if edit task form is open and visible
    const editTaskModal = document.querySelector('#edit-task-modal');
    const editTaskSubmitButton = document.querySelector('.save-btn');
    
    // Check if the add project modal is open and visible
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectSubmitButton = document.querySelector('.add-project-to-list');

    if (getComputedStyle(addTaskForm).display !== 'none' && getComputedStyle(addProjectModal).display === 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    } else if (getComputedStyle(editTaskModal).display !== 'none') {
      editTaskSubmitButton.click();
      editTaskModal.close();
    }
  }
});


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


export function handleToggleCompletedTasksButtonClick() {
  const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');
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
        
        // Get the category ID
        const categoryId = currentCategoryViewId;

        // Get the task ID 
        const taskId = event.target.dataset.taskId;
        clearFormFields();
        displayTaskDetailsForEditing(categoryId, taskId);
      }
    });  
  });
}


function displayTaskDetailsForEditing(categoryId, taskId) {
  const category = categories.find(category => category.id === categoryId);
  const task = category.tasks.find(task => task.id === taskId);
  const categoryDropDownButton = document.querySelector('.project-drop-down');
  
  document.querySelector('#task-id').value = task.id;
  document.querySelector('#edit-title').value = task.title;
  document.querySelector('#edit-description').textContent = task.description;
  document.querySelector('#edit-due-date').value = task.dueDate;
  document.querySelector(`.priority-drop-down option[value='${task.priority}']`).selected = true;
  
  categoryDropDownButton.innerHTML = '';
  categories.forEach(category => {
    const categoryOption = document.createElement('option');
    categoryOption.setAttribute('value', category.id);
    categoryOption.textContent = category.title;

    categoryDropDownButton.appendChild(categoryOption);
  });

  document.querySelector(`.project-drop-down option[value='${category.id}']`).selected = true;
}


export function handleEditTaskFormSubmission() {
  document.querySelector('#edit-task').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();    

    // Reference to the form for scope
    const form = event.currentTarget;
    
    // Get values from the form fields
    const selectedCategoryId = form.querySelector('.project-drop-down').value;
    const taskId = form.querySelector('#task-id').value;
    const title = form.querySelector('#edit-title').value;
    const description = form.querySelector('#edit-description').value;
    const dueDate = form.querySelector('#edit-due-date').value;
    const priority = form.querySelector('.priority-drop-down').value;

    const updates = {
      title: title, // Make this a requirement in UI code
      description: description || '',
      dueDate: dueDate || '',
      priority: priority || 'low'
    };

    if (currentCategoryViewId === selectedCategoryId) {
      editTask(currentCategoryViewId, taskId, updates);      
    } else if (currentCategoryViewId !== selectedCategoryId) {
      deleteTaskFromCategory(currentCategoryViewId, taskId);
      createTask(selectedCategoryId, title, description, dueDate, priority);
    }
    
    editTaskDialog.close();
    clearFormFields();    
    renderTasks(currentCategoryViewId, categories);
  });
}
