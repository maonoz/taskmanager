let tasks = [];

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskName = taskInput.value.trim();

  if (taskName === '') {
    alert('Please enter a task.');
    return;
  }

  tasks.push({ name: taskName, completed: false });
  renderTasks();
  taskInput.value = '';
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item' + (task.completed ? ' completed' : '');

    const taskName = document.createElement('span');
    taskName.textContent = task.name;
    taskItem.appendChild(taskName);

    const buttons = document.createElement('div');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
    toggleButton.onclick = () => toggleTask(index);
    buttons.appendChild(toggleButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeTask(index);
    buttons.appendChild(removeButton);

    taskItem.appendChild(buttons);
    taskList.appendChild(taskItem);
  });
}