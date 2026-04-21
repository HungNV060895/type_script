const todoData = JSON.parse(localStorage.getItem('todos') || '[]');
const displayTable = () => {
    const tableTodo = document.getElementById('totoTable');
    todoData.forEach((item) => {
        tableTodo.insertAdjacentHTML('beforeend', `<tr>
                <td>${item.id}</td>
                <td>${item.todoName}</td>
                <td>${item.completed ? 'Yes' : 'No'}</td>
                <td><button type="button" class="btn btn-danger btn-delete" data-todo="${item.id}">Delete</button></td>
            </tr>`);
    });
};
export { displayTable };
