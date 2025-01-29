document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
  
    if (title && description) {
      addToDoItem(title, description);
      document.getElementById('todo-form').reset();
    }
  });
  
  function addToDoItem(title, description) {
    const todoList = document.getElementById('todo-list');
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${title}</td>
      <td>${description}</td>
      <td><button class="delete-btn">X</button></td>
    `;
  
    row.querySelector('.delete-btn').addEventListener('click', function () {
      row.remove();
    });
  
    todoList.appendChild(row);
  }
  