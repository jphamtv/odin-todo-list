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
        dueDate: '2023-11-23',
        priority: 'high',
        isComplete: false,
      },
      {
        id: '2',
        category: 'inbox',
        title: 'My second task',
        description: '',
        dueDate: '',
        priority: 'medium',
        isComplete: false,
      },
      {
        id: '3',
        category: 'Project A',
        title: 'My third task',
        description: '',
        dueDate: '',
        priority: 'low',
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
        description: '',
        dueDate: '',
        priority: 'low',
        isComplete: false,
      },
    ]
  },
]


export function getStoredCategories() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}


export function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}


export function updateCategories(updatedCategories) {
  // Clear out the tasks
  categories.length = 0;

  // Add the new tasks
  updatedCategories.forEach(category => categories.push(category));
}