const todoInput = document.querySelector(".input-field");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// get the starting tasks from the database
const getTasks = async function () {
  const result = await getAllTasks();
  let tasks = Object.keys(result).map(key => ({
    id: key,
    description: result[key].description,
    done: result[key].done,
  }));
  // create to do items incl buttons to delete and complete tasks
  const todoDiv = document.createElement("ul");
  todoDiv.classList.add("todo");
  tasks.forEach(result => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    todoDiv.appendChild(newTask);
    const newtoDo = document.createElement("li");
    newtoDo.innerHTML = result.description;
    newtoDo.classList.add("todo-item");
    newTask.appendChild(newtoDo);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-button");
    newTask.appendChild(completedButton);
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-button");
    trashButton.id = result.id;
    newTask.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    // clear the input after you added a task
    todoInput.value = "";
  });
};
getTasks();

// delete or complete tasks
const deleteCheck = function (event) {
  const item = event.target;
  if (item.className === "trash-button") {
    const todo = item.parentElement;
    todo.remove();
    fetch(
      `https://wincacademydatabase.firebaseio.com/Tomas/Tasks/${item.id}.json`,
      { method: "DELETE" }
    );
  }
  if (item.className === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};
// eventlisteners
todoButton.addEventListener("click", addtoDo);
todoList.addEventListener("click", deleteCheck);
