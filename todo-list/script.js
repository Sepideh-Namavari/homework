function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  list.innerHTML="";
  todos.forEach((todo)=>{
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent=todo.task;
    if(todo.completed){
      li.style.textDecoration="line-through";
    }
    let span=document.createElement("span");
    span.className = 'badge bg-primary rounded-pill';
    let checkIcon =document.createElement("i");
    checkIcon.className = 'fa fa-check';
    checkIcon.style.cursor="pointer";
    let trashIcon = document.createElement('i');
    trashIcon.className = 'fa fa-trash ms-2';
    trashIcon.style.cursor = 'pointer';
        checkIcon.addEventListener('click', () => {
      if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none';
        todo.completed = false;
      } else {
        li.style.textDecoration = 'line-through';
        todo.completed = true;
      }
    });
      trashIcon.addEventListener('click', () => {
      li.remove();
    });
    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);
    list.appendChild(li);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
    const input = document.getElementById('todoInput');
  const newTask = input.value.trim();

  if (newTask !== '') {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos);
    input.value = '';
  }
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
    todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
