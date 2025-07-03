function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });
  
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent mark as done
      li.remove();
    });
  
    li.appendChild(deleteBtn);
  
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
  }
  