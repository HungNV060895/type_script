import { Todo } from "./main.js";
declare var bootstrap: any;
const toastDelete = new bootstrap.Toast(document.getElementById('deleteSuccess'),{
    delay: 1000
});

const handleDelete = () => {
    const tableTodo = document.getElementById('totoTable') as HTMLTableElement;

    tableTodo.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if(!target.classList.contains('btn-delete')) return;

        const id = target.getAttribute('data-todo');
        if(id){
            removeTodoFormLocalStorage(parseInt(id));
            target.closest('tr')?.remove();
        }
    })
}


const removeTodoFormLocalStorage = (id: number) => {
    const todoStr = localStorage.getItem('todos');
    if(todoStr){
        const arrTodo = JSON.parse(todoStr);
        const newTodoData = arrTodo.filter((item: Todo) => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodoData));
        toastDelete.show();
    }
}

export { handleDelete }