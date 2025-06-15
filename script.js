// Ensure that the script runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // 1. Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Define the function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // remove extra whitespace

        // 3. Validate that the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // 4. Create the <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // 5. Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // 6. Add the remove functionality
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // 7. Append the button to the list item
        listItem.appendChild(removeButton);

        // 8. Append the list item to the task list
        taskList.appendChild(listItem);

        // 9. Clear the input field
        taskInput.value = "";
    }

    // 10. Add click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // 11. Add keypress event to support Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});