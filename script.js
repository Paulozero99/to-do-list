function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return alert("Digite uma tarefa!");

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <span class="delete-btn" onclick="deleteTask(this)">X</span>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

function deleteTask(btn) {
  btn.parentElement.remove();
}