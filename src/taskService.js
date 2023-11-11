// src/taskService.js
import { v4 as uuidv4 } from 'uuid'
import { 
  displayIncompleteTasks, 
  clearFormFields, 
  displayAllTasks, 
  showCompletedTasks, 
  displayProjects,
} from "./taskView.js";


// Data structure to store categories and tasks
export let categories = [
  {
    id: 'inbox',
    title: 'Inbox',
    tasks: [
      {
        id: '1',
        category: 'inbox',
        title: 'My first task', 
        description: 'Description of my first task', 
        dueDate: '10-31-2023', 
        priority: 'High', 
        isComplete: false,
      },
      { 
        id: '2',
        category: 'inbox',
        title: 'My second task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
      { 
        id: '3',
        category: 'Project A',
        title: 'My third task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
    ]
  },
  {
    id: 'project-1',
    title: 'Software Development',
    tasks: []
  },
  {
    id: 'project-2',
    title: 'Personal Tasks',
    tasks: [
      { 
        id: '3',
        title: 'My third task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
    ]
  },
]

function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}

function getStoredTasks() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
   return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}

function createCategory(title) {
  const newCategory = {
    id: uuidv4(),
    title: title,
    tasks: []
  };
  categories.push(newCategory);
  updateLocalStorage(categories);
}

function createTask(categoryId, title, description = null, dueDate = null, priority = 'priority-4', isComplete = false) {
  const newTask = {
    id: uuidv4(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    isComplete: isComplete,
  };

  const category = categories.find(category => category.id === categoryId);
  if (category) {
    categories.tasks.push(newTask);
    updateLocalStorage(categories);  
  } else {
    console.error('Category not found');
  }
}

function deleteCategory(categoryId) {
  const updatedCategories = categories.filter(category => category.id !== categoryId);
  categories = updatedCategories;
  updateLocalStorage(categories);
}

function deleteTaskFromCategory(categoryId, taskId) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    const updatedTasks = category.tasks.filter(task => task.id !== taskId);
    category.tasks = updatedTasks;

    updateLocalStorage(categories);  
  } else {
    console.error('Category not found');
  }
}

function toggleTaskStatus(categoryId, taskId) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    const taskIndex = category.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      // Toggle the completion status
      category.tasks[taskIndex].isComplete = !category.tasks[taskIndex].isComplete;

      // Move the task to the correct position
      const task = category.tasks.splice(taskIndex, 1)[0];
      if (task.isComplete) {
        // Add the task to the beginning of the array for completed tasks
        category.tasks.unshift(task);
      } else {
        // Add the task to the end of the array for incomplete tasks
        category.tasks.push(task);
      }

      updateLocalStorage(categories);
    } else {
      console.error('Task not found');
    }
  } else {
    console.error('Category not found');
  }
}

// // Set the data structure to store tasks
// export let myTasks = [
//   { 
//     id: '1',
//     category: 'inbox',
//     title: 'My first task', 
//     description: 'Description of my first task', 
//     dueDate: '10-31-2023', 
//     priority: 'High', 
//     isComplete: false,
//   },
//   { 
//     id: '2',
//     category: 'inbox',
//     title: 'My second task', 
//     description: null, 
//     dueDate: null, 
//     priority: null, 
//     isComplete: false,
//   },
// ]

// export let myProjects = [
//   {
//     id: '1',
//     title: 'Software Development'
//   },
//   {
//     id: '2',
//     title: 'Personal Tasks'
//   },
// ]


// export function updateMyTasks(newTasks) {
//   // Clear out the tasks
//   myTasks.length = 0;

//   // Add the new tasks
//   newTasks.forEach(task => myTasks.push(task));
// }


// export function saveTasksToLocalStorage(myTasks) {
//   localStorage.setItem('tasks', JSON.stringify(myTasks));
// }


// export function getTasksFromLocalStorage() {
//   const storedTasks = localStorage.getItem('tasks');
//   if (storedTasks) {
//     return JSON.parse(storedTasks);
//   }
//   return []; // Return empty array if nothing in localStorage to avoid error
// }


// export function updateMyProjects(newProjects) {
//   // Clear out the tasks
//   myProjects.length = 0;

//   // Add the new tasks
//   newProjects.forEach(project => myProjects.push(project));
// }


// export function saveProjectsToLocalStorage(myProjects) {
//   localStorage.setItem('projects', JSON.stringify(myProjects));
// }


// export function getProjectsFromLocalStorage() {
//   const storedProjects = localStorage.getItem('projects');
//   if (storedProjects) {
//     return JSON.parse(storedProjects);
//   }
//   return []; // Return empty array if nothing in localStorage to avoid error
// }



// // Function to create projects
// class Project {
//   constructor(id, title) {
//     this.id = id;
//     this.title = title;
//   }
// }

// // Function to create tasks
// class Task {
//   constructor(id, category, title, description, dueDate, priority, isComplete = false) {
//     this.id = id;
//     this.category = category;
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.isComplete = isComplete;
//   }
// }

/* CREATE LOGIC */

// export function createProject(title) {
//   // Generate unique ID for the project
//   const id = uuidv4();

//   // Create a new task using the Project class
//   const project = new Project(id, title);

//   myProjects.push(project)
//   saveProjectsToLocalStorage(myProjects);

//   // Update the UI
//   displayProjects(myProjects);
// }


// export function createTask(category, title, description, dueDate, priority, isComplete) {
//   // Generate unique ID for the task
//   const id = uuidv4();

//   // Create a new task using the Task class
//   const task = new Task(id, category, title, description, dueDate, priority, isComplete);

//   myTasks.push(task)
//   saveTasksToLocalStorage(myTasks);

//   // Update the UI
//   displayIncompleteTasks(myTasks);

//   // Clear the form fields
//   clearFormFields();
// }


/* DELETE LOGIC */

// // Function to delete tasks by their unique ID
// export function deleteTask(taskId) {
//   const tasks = getTasksFromLocalStorage();
//   const updatedTasks = tasks.filter(task => task.id !== taskId);
//   saveTasksToLocalStorage(updatedTasks);
//   updateMyTasks(updatedTasks);

//   if (!showCompletedTasks) {
//     displayIncompleteTasks(updatedTasks);
//   } else {
//     displayAllTasks(updatedTasks);
//   }
// }


// export function toggleTaskComplete(taskId) {
//   // Operate on the latest tasks array from localStorage
//   const tasks = getTasksFromLocalStorage();
//   const taskIndex = tasks.findIndex(task => task.id === taskId);

//   if (taskIndex !== -1 && tasks[taskIndex].isComplete === false) {
//     tasks[taskIndex].isComplete = true;  
//     saveTasksToLocalStorage(tasks);
//     displayIncompleteTasks(tasks);

//   } else if (taskIndex !== -1 && tasks[taskIndex].isComplete === true) {
//     tasks[taskIndex].isComplete = false;
//     saveTasksToLocalStorage(tasks);
//     displayAllTasks(tasks);
//   }  
//     else {
//     console.error('Task not found');
//   }  
// }

export function getTaskDetails(taskId) {
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find(task => task.id === taskId);
  return task;
}

// Function to update a task
function updateTaskDetails() {

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