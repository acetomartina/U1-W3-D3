const addTask = () => {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  document.getElementById("taskList").appendChild(li);

  input.value = "";
};
