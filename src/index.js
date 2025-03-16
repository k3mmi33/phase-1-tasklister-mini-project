document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const taskDescription = document.getElementById("new-task-description").value;
        if (taskDescription) {
            addTask(taskDescription);
            form.reset(); // Clear the input field after adding the task
        }
    });

    function addTask(taskDescription) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskItem.remove(); // Remove the task item from the list
        });

        taskItem.appendChild(deleteButton);
        document.getElementById("tasks").appendChild(taskItem);
    }
});
