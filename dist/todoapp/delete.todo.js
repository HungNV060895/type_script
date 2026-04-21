const toastDelete = new bootstrap.Toast(document.getElementById('deleteSuccess'), {
    delay: 1000
});
const handleDelete = () => {
    const tableTodo = document.getElementById('totoTable');
    tableTodo.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('btn-delete'))
            return;
        const id = target.getAttribute('data-todo');
        if (id) {
            removeTodoFormLocalStorage(parseInt(id));
            target.closest('tr')?.remove();
        }
    });
};
const removeTodoFormLocalStorage = (id) => {
    const todoStr = localStorage.getItem('todos');
    if (todoStr) {
        const arrTodo = JSON.parse(todoStr);
        const newTodoData = arrTodo.filter((item) => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodoData));
        toastDelete.show();
    }
};
export { handleDelete };
