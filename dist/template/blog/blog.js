import { fetchBlogs } from "../../template/blog/display.blog.js";
import { actionDelete, handleDeleteBlog } from "./delete.blog.js";
const tableBody = document.querySelector("#tableBlog tbody");
const toastAdd = new bootstrap.Toast(document.getElementById('addSuccess'), {
    delay: 1000
});
const toastUpdate = new bootstrap.Toast(document.getElementById('updateSuccess'), {
    delay: 1000
});
const modal = new bootstrap.Modal(document.getElementById('createBlog'));
const modalElement = document.getElementById('createBlog');
const modalTitle = document.querySelector('.modal-title');
const btnCreate = document.getElementById('btnCreate');
const btnUpdate = document.getElementById('btnUpdate');
const inputTitle = document.querySelector('input[name="title"]');
const inputAuthor = document.querySelector('input[name="author"]');
const inputContent = document.querySelector('textarea[name="content"]');
const msgError = document.querySelector('.modal-body .alert-danger');
//State
let currentEditId = null;
let currentRow = null;
//Xử lý modal close event để reset form và trạng thái
modalElement?.addEventListener('hidden.bs.modal', () => {
    resetInput();
    setModalMode('create');
    currentEditId = null;
    currentRow = null;
});
const setModalMode = (mode) => {
    if (mode === 'create') {
        modalTitle.textContent = "Create a new blog";
        btnCreate.style.display = 'block';
        btnUpdate.style.display = 'none';
    }
    else {
        modalTitle.textContent = "Edit Blog";
        btnCreate.style.display = 'none';
        btnUpdate.style.display = 'block';
    }
};
const resetInput = () => {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputContent.value = '';
};
//Create blogs
btnCreate?.addEventListener('click', async () => {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const content = inputContent.value;
    if (title.trim() && author.trim() && content.trim()) {
        try {
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });
            if (!rawResponse.ok)
                throw new Error('API error');
            const res = await rawResponse.json();
            addNewRow(res);
            toastAdd.show();
            modal.hide();
        }
        catch (err) {
            console.error(err);
        }
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
await fetchBlogs();
handleDeleteBlog();
tableBody?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('btn-edit')) {
        const btn = target;
        const id = btn.getAttribute('data-id');
        const title = btn.getAttribute('data-title');
        const author = btn.getAttribute('data-author');
        const content = btn.getAttribute('data-content');
        const thisRow = target.parentElement?.parentElement;
        inputTitle.value = title || '';
        inputAuthor.value = author || '';
        inputContent.value = content || '';
        // Set current edit state
        currentEditId = id ? parseInt(id) : null;
        currentRow = thisRow;
        modal.show();
        setModalMode('edit');
    }
});
btnUpdate.addEventListener('click', async () => {
    if (!currentEditId || !currentRow)
        return;
    await updateBlog(currentEditId, inputTitle.value, inputAuthor.value, inputContent.value);
    currentRow.remove();
    addNewRow({
        id: currentEditId,
        title: inputTitle.value,
        author: inputAuthor.value,
        content: inputContent.value
    });
    modal.hide();
    toastUpdate.show();
    setModalMode('create');
    resetInput();
    // Reset current edit state
    currentEditId = null;
    currentRow = null;
});
const updateBlog = async (id, title, author, content) => {
    try {
        const res = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        });
        if (!res.ok)
            throw new Error('API error');
    }
    catch (err) {
        console.error(err);
    }
};
//Action Control Area
const addNewRow = (data) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>
            <button
                data-id="${data.id}"
                data-title="${data.title}"
                data-author="${data.author}"
                data-content="${data.content}" class="btn btn-warning btn-edit">Edit</button>
            <button class="btn btn-danger btn-delete" data-id=${data.id}>Delete</button>
        </td>
    `;
    tableBody?.appendChild(newRow);
    const btnDelete = newRow.querySelector('.btn-delete');
    actionDelete(btnDelete);
};
