// src/taskService.js
import { v4 as uuidv4 } from 'uuid'

import { 
  categories,
  updateLocalStorage,
} from './utils.js';

import { 
  displayIncompleteTasks, 
  clearFormFields, 
  displayAllTasks, 
  displayProjects,
  renderIncompleteTasks,
} from "./taskView.js";


export function createCategory(title) {
  const newCategory = {
    id: uuidv4(),
    title: title,
    tasks: []
  };

  categories.push(newCategory);
  updateLocalStorage(categories);
}


export function createTask(categoryId, title, description = '', dueDate = '', priority = 'priority-4', isComplete = false) {
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


export function deleteCategory(categoryId) {
  const updatedCategories = categories.filter(category => category.id !== categoryId);
  categories = updatedCategories;
  updateLocalStorage(categories);
}


export function deleteTaskFromCategory(categoryId, taskId) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    const updatedTasks = category.tasks.filter(task => task.id !== taskId);
    category.tasks = updatedTasks;

    updateLocalStorage(categories);  
  } else {
    console.error('Category not found');
  }
}


// Function to update a task
export function editCategory(categoryId, updatedTitle) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    category.title = updatedTitle;

    updateLocalStorage(categories);
  } else {
    console.error('Category not found');
  }
}


export function editTask(categoryId, taskId, updates) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    const task = category.tasks.find(task => task.id === taskId);
    if (task) {
      // Iterate over the properties in updates and apply them to the task
      Object.keys(updates).forEach(key => {
        if(task.hasOwnProperty(key)) {
          task[key] = updates[key];
        }
      });

      updateLocalStorage(categories);
    } else {
      console.error('Task not found');
    }
  } else {
    console.error('Category not found');
  }
}

// // Place this inside the UI function to handle task edits
// const updates = {
//   title: title, // Make this a requirement in UI code
//   description: description || '',
//   dueDate: dueDate || '',
//   priority: priority || 'priority-4'
// };



export function toggleTaskStatus(categoryId, taskId) {
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
