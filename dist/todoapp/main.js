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
btnAdd.addEventListener('click', () => {
    const todoID = getRandomInt(1, 100);
    const value = txtTodo.value;
    handleResetInput();
    const todo = {
        id: todoID,
        todoName: value,
        completed: false
    };
    //JSON.stringify(todo)
    const todoArr = JSON.parse(localStorage.getItem('todos') || '[]');
    localStorage.setItem('todos', JSON.stringify([...todoArr, todo]));
    window.location.reload();
});
const todoData = JSON.parse(localStorage.getItem('todos') || '[]');
todoData.forEach((item) => {
    tableTodo.insertAdjacentHTML('beforeend', `<tr>
            <td>${item.id}</td>
            <td>${item.todoName}</td>
            <td>${item.completed ? 'Yes' : 'No'}</td>
        </tr>`);
});
export {};
