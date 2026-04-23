const toastDelete = new bootstrap.Toast(document.getElementById('deleteSuccess'), {
    delay: 1000
});
const actionDelete = (btnElement) => {
    btnElement.addEventListener('click', (e) => {
        const target = e.target;
        const id = target.getAttribute('data-id');
        if (id) {
            deleteBlog(parseInt(id));
            target.closest('tr')?.remove();
            toastDelete.show();
        }
    });
};
const deleteBlog = async (id) => {
    const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};
const handleDeleteBlog = () => {
    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach((item) => {
        actionDelete(item);
    });
};
export { handleDeleteBlog, actionDelete };
