function todoList(todos) {
  // Write your code here...
  const contentDiv = document.getElementById("content");
  const ul = document.createElement("ul");
  todos.forEach((todoItem) => {
    const li = document.createElement("li");
    li.textContent = todoItem.todo;
    ul.appendChild(li);
    li.addEventListener(
      "click",
      () =>
        (li.style.textDecoration =
          li.style.textDecoration === "line-through" ? "" : "line-through")
    );
  });
  contentDiv.appendChild (ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
