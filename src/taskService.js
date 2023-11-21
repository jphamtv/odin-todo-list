// src/taskService.js
import { v4 as uuidv4 } from "uuid";

import { categories, updateLocalStorage, updateCategories, getCategory } from "./utils";

/**
 * Creates a new category with a unique ID and the provided title.
 */
export function createCategory(title) {
  const newCategory = {
    id: uuidv4(),
    title,
    tasks: [],
  };

  categories.push(newCategory);
  updateLocalStorage(categories);
}

/**
 * Creates a new task with a unique ID within the specified category.
 */
export function createTask(
  categoryId,
  title,
  description = "",
  dueDate = "",
  priority = "low",
  isComplete = false,
) {
  const newTask = {
    id: uuidv4(),
    title,
    description,
    dueDate,
    priority,
    isComplete,
  };

  // const category = categories.find((category) => category.id === categoryId);
  const category = getCategory(categoryId);
  if (category) {
    category.tasks.push(newTask);
    updateLocalStorage(categories);
  } else {
    console.error("Category not found");
  }
}

/**
 * Deletes a category by its ID.
 */
export function deleteCategory(categoryId) {
  const updatedCategories = categories.filter(
    (category) => category.id !== categoryId,
  );
  updateCategories(updatedCategories);
  updateLocalStorage(categories);
}

/**
 * Deletes a task from a category.
 */
export function deleteTaskFromCategory(categoryId, taskId) {
  const category = getCategory(categoryId);
  if (category) {
    const updatedTasks = category.tasks.filter((task) => task.id !== taskId);
    category.tasks = updatedTasks;

    updateLocalStorage(categories);
  } else {
    console.error("Category not found");
  }
}

/**
 * Edits the title of an existing category.
 */
export function editCategory(categoryId, updatedTitle) {
  const category = getCategory(categoryId);
  if (category) {
    category.title = updatedTitle;

    updateLocalStorage(categories);
  } else {
    console.error("Category not found");
  }
}

export function editTask(categoryId, taskId, updates) {
  const category = getCategory(categoryId);
  if (category) {
    const task = category.tasks.find((taskItem) => taskItem.id === taskId);
    if (task) {
      // Iterate over the properties in updates and apply them to the task
      Object.keys(updates).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(task, key)) {
          task[key] = updates[key];
        }
      });

      updateLocalStorage(categories);
    } else {
      console.error("Task not found");
    }
  } else {
    console.error("Category not found");
  }
}

/**
 * Edits an existing task with provided updates.
 */
export function toggleTaskStatus(categoryId, taskId) {
  const category = getCategory(categoryId);
  if (category) {
    const taskIndex = category.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      // Toggle the completion status
      category.tasks[taskIndex].isComplete =
        !category.tasks[taskIndex].isComplete;
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
      console.error("Task not found");
    }
  } else {
    console.error("Category not found");
  }
}
