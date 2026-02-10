const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create elements
  const li = document.createElement("li");
  const taskDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // Set attributes & text
  taskDiv.className = "task";
  checkbox.type = "checkbox";
  span.textContent = taskText;
  deleteBtn.textContent = "Delete";

  // Mark task as done
  checkbox.addEventListener("change", function () {
    span.classList.toggle("done");
  });

  // Delete task
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Build DOM structure
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(span);
  li.appendChild(taskDiv);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
