document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(todoInput.value);
        todoInput.value = '';
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(span));
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(li));
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }

    function editTask(span) {
        const newTaskText = prompt('Edit task', span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            span.textContent = newTaskText;
        }
    }

    function deleteTask(li) {
        todoList.removeChild(li);
    }
});
