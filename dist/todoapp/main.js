import { displayTable } from "./table.todo.js";
import { handleDelete } from "./delete.todo.js";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const btnAdd = document.getElementById('addTodo');
const txtTodo = document.getElementById('txtTodo');
const toastAdd = new bootstrap.Toast(document.getElementById('addSuccess'), {
    delay: 1000
});
const tableTodo = document.getElementById('totoTable');
const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
const handleResetInput = () => {
    txtTodo.value = '';
};
btnAdd?.addEventListener('click', () => {
    const todoID = getRandomInt(1, 100);
    if (txtTodo) {
        const value = txtTodo.value;
        handleResetInput();
        const todo = {
            id: todoID,
            todoName: value,
            completed: false
        };
        //Cách 1
        //JSON.stringify(todo)
        // const todoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
        // localStorage.setItem('todos', JSON.stringify([...todoArr, todo]));
        //Cách 2
        const todoStr = localStorage.getItem('todos');
        if (todoStr) {
            const arrTodo = JSON.parse(todoStr);
            arrTodo.push(todo);
            localStorage.setItem('todos', JSON.stringify(arrTodo));
        }
        else {
            localStorage.setItem('todos', JSON.stringify([todo]));
        }
        toastAdd.show();
        modal.hide();
        tableTodo.innerHTML = '';
        addRowWidthJs(todo);
    }
});
const addRowWidthJs = (data) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.id}</td><td>${data.todoName}</td><td>${data.completed ? 'Yes' : 'No'}</td><td><button type="button" class="btn btn-danger btn-delete" data-todo="${data.id}">Delete</button></td>`;
    tableTodo.appendChild(row);
};
displayTable();
handleDelete();
