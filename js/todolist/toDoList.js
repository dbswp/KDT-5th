const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");
const checkBox = document.createElement("input");

let Todo = [];

function toDoDelete(e) {
  e.target.parentNode.remove();
}

function checkedBox() {
  if (checkBox.checked === true) {
    checkBox.parentNode.style.textDecoration = "line-through";
  } else {
    checkBox.parentNode.style.textDecoration = "none";
  }
}

function toDoview(newTodo) {
  if (newTodo === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  }

  const liEl = document.createElement("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "삭제";

  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("click", checkedBox);
  liEl.innerText = newTodo;

  todoList.append(liEl);
  liEl.prepend(checkBox);
  liEl.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", toDoDelete);
}

function toDoAdd() {
  const newTodo = inputTask.value;
  inputTask.value = "";
  Todo.push(newTodo);
  toDoview(newTodo);
}

addBtn.addEventListener("click", toDoAdd);
