// src/utils.js
import { parseISO, format, isThisYear } from "date-fns";

/**
 * Default data structure to store categories and tasks.
 * These are used to populate the application on initial load.
 */
export const categories = [
  {
    id: "inbox",
    title: "Inbox",
    tasks: [
      {
        id: "1",
        title: "My first task",
        description: "Description of my first task",
        dueDate: "2023-11-23",
        priority: "high",
        isComplete: false,
      },
      {
        id: "2",
        title: "My second task",
        description: "",
        dueDate: "",
        priority: "medium",
        isComplete: false,
      },
      {
        id: "3",
        title: "My third task",
        description: "",
        dueDate: "",
        priority: "low",
        isComplete: false,
      },
    ],
  },
  {
    id: "project-1",
    title: "Software Development",
    tasks: [],
  },
  {
    id: "project-2",
    title: "Personal Tasks",
    tasks: [
      {
        id: "3",
        title: "Pick up dry cleaning",
        description: "",
        dueDate: "",
        priority: "low",
        isComplete: false,
      },
    ],
  },
];


/**
 * Finds a category by it's unique ID. 
 * If there are no stored categories, returns an empty array.
 */
export function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}


/**
 * Retrieves categories from localStorage, parses them, and returns them.
 * If there are no stored categories, returns an empty array.
 */
export function getStoredCategories() {
  const storedTasks = localStorage.getItem("taskCategories");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return []; // Return empty array if nothing in localStorage to avoid error
}

/**
 * Updates the localStorage item 'taskCategories' with the latest categories array.
 */
export function updateLocalStorage(updatedCategories) {
  localStorage.setItem("taskCategories", JSON.stringify(updatedCategories));
}

/**
 * Clears the current categories array and updates it with new data.
 */
export function updateCategories(updatedCategories) {
  // Clear out the tasks
  categories.length = 0;

  // Add the new tasks
  updatedCategories.forEach((category) => categories.push(category));
}

/**
 * Formats a given ISO date string to a more readable format.
 * If the date is in the current year, omits the year from the string.
 */
export function formatDueDate(dueDate) {
  if (!dueDate) return "";

  const parsedDate = parseISO(dueDate);

  if (isThisYear(parsedDate)) {
    return format(parsedDate, "MMM d");
  } 
    return format(parsedDate, "MMM d yyyy");
  
}
