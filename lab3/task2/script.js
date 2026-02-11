const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

/**
 * Creates a new to-do item element
 * @param {string} text - The task description
 */
const createTodoItem = (text) => {
  
  const li = document.createElement('li');
  li.className = 'todo-item';

  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑'; 
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });


  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  
  return li;
};

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  
  if (taskText !== '') {
    const newItem = createTodoItem(taskText);
    todoList.appendChild(newItem);
    todoInput.value = ''; 
  }
});