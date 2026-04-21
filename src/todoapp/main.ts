import { displayTable } from "./table.todo.js";
import { handleDelete } from "./delete.todo.js";

type Todo = {
    id: number,
    todoName: string,
    completed: boolean
}

declare var bootstrap: any;


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const btnAdd = document.getElementById('addTodo') as HTMLButtonElement;
const txtTodo = document.getElementById('txtTodo') as HTMLInputElement;
const toastAdd = new bootstrap.Toast(document.getElementById('addSuccess'), {
    delay: 1000
});

const tableTodo = document.getElementById('totoTable') as HTMLTableElement;

const modal = new bootstrap.Modal(document.getElementById('exampleModal')!);


const handleResetInput = () => {
    txtTodo.value = '';
}


btnAdd?.addEventListener('click', () => {
    const todoID = getRandomInt(1, 100);
    if(txtTodo){
        const value = txtTodo.value;
        handleResetInput();

        const todo: Todo = {
            id: todoID,
            todoName: value,
            completed: false
        }


        //Cách 1
        //JSON.stringify(todo)
        // const todoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

        // localStorage.setItem('todos', JSON.stringify([...todoArr, todo]));



        //Cách 2
        const todoStr = localStorage.getItem('todos');

        if(todoStr){
            const arrTodo = JSON.parse(todoStr);
            arrTodo.push(todo);
            localStorage.setItem('todos', JSON.stringify(arrTodo));
            
        }else{
            localStorage.setItem('todos', JSON.stringify([todo]));
        }
        toastAdd.show();
        modal.hide();
        tableTodo.innerHTML = '';
        addRowWidthJs(todo);
    }
})

const addRowWidthJs = (data: Todo) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.id}</td><td>${data.todoName}</td><td>${data.completed ? 'Yes' : 'No'}</td><td><button type="button" class="btn btn-danger btn-delete" data-todo="${data.id}">Delete</button></td>`;
    tableTodo.appendChild(row);
}

displayTable();
handleDelete();

export { Todo}