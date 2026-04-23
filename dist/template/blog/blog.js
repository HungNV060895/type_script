import { fetchBlogs } from "../../template/blog/display.blog.js";
import { handleDeleteBlog } from "./delete.blog.js";
const tableBody = document.querySelector("#tableBlog tbody");
const toastAdd = new bootstrap.Toast(document.getElementById('addSuccess'), {
    delay: 1000
});
const modal = new bootstrap.Modal(document.getElementById('createBlog'));
const btnCreate = document.getElementById('btnCreate');
const msgError = document.querySelector('.modal-body .alert-danger');
//Create blogs
btnCreate?.addEventListener('click', () => {
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
    if (title !== "" && author !== "" && content !== "") {
        (async () => {
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });
            const res = await rawResponse.json();
            addNewRow(res);
            toastAdd.show();
            modal.hide();
        })();
        msgError.style.display = 'none';
    }
    else {
        msgError.style.display = 'block';
        setTimeout(() => {
            msgError.style.display = 'none';
        }, 2000);
        return false;
    }
});
const addNewRow = (data) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>
            <button class="btn btn-warning btn-edit" data-id=${data.id}>Edit</button>
            <button class="btn btn-danger btn-delete" data-id=${data.id}>Delete</button>
        </td>
    `;
    tableBody?.appendChild(newRow);
};
const btnEdit = document.querySelectorAll('.btn-edit');
btnEdit.forEach((item) => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        const id = target.getAttribute('data-id');
        const title = target.getAttribute('data-title');
        const author = target.getAttribute('data-author');
        const content = target.getAttribute('data-content');
        const inputTitle = document.querySelector('input[name="title"]');
        const inputAuthor = document.querySelector('input[name="author"]');
        const inputContent = document.querySelector('textarea[name="content"]');
        inputTitle.value = title || '';
        inputAuthor.value = author || '';
        inputContent.value = content || '';
        modal.show();
        if (id) {
            console.log(id);
        }
    });
});
const editBlog = async (id) => {
};
await fetchBlogs();
handleDeleteBlog();
