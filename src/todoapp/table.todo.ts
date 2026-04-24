import { Todo } from "./main.js";

const todoData: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
const displayTable = () => {
    const tableTodo = document.getElementById('totoTable') as HTMLTableElement;
    if (!tableTodo) return;
    tableTodo.innerHTML = '';
    if(todoData.length === 0){
        tableTodo.innerHTML = '<tr><td colspan="4">Empty Task</td></tr>';
        return;
    }
    todoData.forEach((item: Todo) => {
        tableTodo.insertAdjacentHTML('beforeend', 
            `<tr>
                <td>${item.id}</td>
                <td>${item.todoName}</td>
                <td>${item.completed ? 'Yes' : 'No'}</td>
                <td><button type="button" class="btn btn-danger btn-delete" data-todo="${item.id}">Delete</button></td>
            </tr>`
        )
    });
}



export {displayTable}