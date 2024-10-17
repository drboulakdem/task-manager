async function loadTasks() {
    try {
        const response = await fetch('tasks.json');
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Failed to load tasks:', error);
    }
}

function displayTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (task.IsNotWorking) {
            taskDiv.classList.add('not-working');
        }

        taskDiv.innerHTML = `
            <h3>${task.TaskName}</h3>
            <a href="${task.TaskLink}" target="_blank">${task.TaskLink}</a>
        `;
        taskList.appendChild(taskDiv);
    });
}

// Load tasks on page load
window.onload = loadTasks;
