// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create new list item
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskValue}
        <button onclick="removeTask(this)">Delete</button>
    `;

    // Append the new task
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}

// Function to remove a task
function removeTask(button) {
    let taskList = document.getElementById("taskList");
    let taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
