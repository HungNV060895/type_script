function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const btnAdd = document.getElementById('addTodo');
const txtTodo = document.getElementById('txtTodo');
const tableTodo = document.getElementById('totoTable');
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
        window.location.reload();
    }
});
const todoData = JSON.parse(localStorage.getItem('todos') || '[]');
todoData.forEach((item) => {
    tableTodo.insertAdjacentHTML('beforeend', `<tr>
            <td>${item.id}</td>
            <td>${item.todoName}</td>
            <td>${item.completed ? 'Yes' : 'No'}</td>
            <td><button type="button" class="btn btn-danger btn-delete" data-todo="${item.id}">Delete</button></td>
        </tr>`);
});
const btnDelete = document.querySelectorAll('.btn-delete');
btnDelete.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-todo');
        const newTodoData = todoData.filter((item) => item.id !== parseInt(id));
        localStorage.setItem('todos', JSON.stringify(newTodoData));
        location.reload();
    });
});
export {};
