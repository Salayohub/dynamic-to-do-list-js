document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    // ✅ Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => createTaskElement(task));
        }
    }

    // ✅ Save tasks to Local Storage
    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ✅ Create task element and display in DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // ✅ Remove task from DOM and localStorage
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
            tasks = tasks.filter(task => task !== taskText);
            saveTasksToLocalStorage();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // ✅ Add new task and save to Local Storage
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        tasks.push(taskText);
        saveTasksToLocalStorage();
        createTaskElement(taskText);
        taskInput.value = "";
    }

    // ✅ Load tasks on page load
    loadTasks();

    // ✅ Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});