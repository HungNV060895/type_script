
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

        window.location.reload();
    }
})




const todoData = JSON.parse(localStorage.getItem('todos') || '[]');

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

const btnDelete = document.querySelectorAll('.btn-delete');

btnDelete.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-todo') as string;
        const newTodoData = todoData.filter((item: Todo) => item.id !== parseInt(id));
        localStorage.setItem('todos', JSON.stringify(newTodoData));
        location.reload();
    })
})

export { }