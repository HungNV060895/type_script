export { }

type Todo = {
    id: number,
    todoName: string,
    completed: boolean
}


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const btnAdd = document.getElementById('addTodo') as HTMLButtonElement;
const txtTodo = document.getElementById('txtTodo') as HTMLInputElement;
const tableTodo = document.getElementById('totoTable') as HTMLTableElement;


const handleResetInput = () => {
    txtTodo.value = '';
}

btnAdd.addEventListener('click', () => {
    const todoID = getRandomInt(1, 100);
    const value = txtTodo.value;

    handleResetInput();

    const todo: Todo = {
        id: todoID,
        todoName: value,
        completed: false
    }

    //JSON.stringify(todo)
    const todoArr: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

    localStorage.setItem('todos', JSON.stringify([...todoArr, todo]));

    window.location.reload();
})


const todoData = JSON.parse(localStorage.getItem('todos') || '[]');

todoData.forEach((item: Todo) => {
    tableTodo.insertAdjacentHTML('beforeend', 
        `<tr>
            <td>${item.id}</td>
            <td>${item.todoName}</td>
            <td>${item.completed ? 'Yes' : 'No'}</td>
        </tr>`
    )
});