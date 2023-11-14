// src/utils.js

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


export function getStoredTasks() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}


export function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}


export function updateCategories(storedTasks) {
  // Clear out the tasks
  categories.length = 0;

  // Add the new tasks
  storedTasks.forEach(category => categories.push(category));
}