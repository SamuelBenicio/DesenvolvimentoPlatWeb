document.addEventListener("DOMContentLoaded", () => {
  loadTasks();

  let taskInput = document.getElementById("taskInput");
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa válida!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let item = document.createElement("li");
  item.innerHTML = `
      <span onclick="toogleTask(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
  taskList.appendChild(item);
  saveTasks();
  taskInput.value = "";
}

function toogleTask(element) {
  element.parentElement.classList.toggle("completed");
  saveTasks();
}

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((task) => {
    tasks.push({
      task: task.querySelector("span").innerText,
      status: task.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskList = document.getElementById("taskList");

  tasks.forEach((element) => {
    let item = document.createElement("li");
    item.innerHTML = `
          <span onclick="toogleTask(this)">${element.task}</span>
          <button class="delete-btn" onclick="deleteTask(this)">X</button>
      `;

    if (element.status) {
      item.classList.add("completed");
    }

    taskList.appendChild(item);
  });
}
