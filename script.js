// Wait until the full HTML document is loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn'); // The "Add Task" button
    const taskInput = document.getElementById('task-input');   // The input box for tasks
    const taskList = document.getElementById('task-list');     // The list to display tasks

    // Function to add a new task
    function addTask() {
        // Get and trim the task text (removes extra spaces)
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop the function here
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Add the text to the list item

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // When the remove button is clicked, delete the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove this specific task from the list
        };

        // Add the button to the list item
        listItem.appendChild(removeButton);

        // Add the full list item (task + remove button) to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding
        taskInput.value = "";
    }

    // When the "Add Task" button is clicked, run addTask
    addButton.addEventListener('click', addTask);

    // Also allow user to press Enter to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Run addTask once on load (for preloading tasks or testing)
    // addTask(); // <-- You can uncomment this if needed

});