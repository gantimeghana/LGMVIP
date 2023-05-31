let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let task = document.createElement("li");
  task.className = "task";
  task.innerHTML = taskInput.value + "<button class='deleteButton' onclick='removeTask(this)'>Delete</button>";
  taskList.appendChild(task);
  taskInput.value = "";
}

function removeTask(task) {
  task.parentElement.remove();
}
