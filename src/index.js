document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskDescription = document.getElementById("new-task-description").value;
        if (taskDescription) {
            addTask(taskDescription);
            form.reset();
        }
    });

    function addTask(taskDescription) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);
        document.getElementById("tasks").appendChild(taskItem);
    }
});
