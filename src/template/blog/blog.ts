import { fetchBlogs } from "../../template/blog/display.blog.js";

declare var bootstrap: any;

interface IBlog{
    id: number,
    title: string,
    author: string,
    content: string
}


const tableBody = document.querySelector("#tableBlog tbody");
const toastAdd = new bootstrap.Toast(document.getElementById('addSuccess'), {
    delay: 1000
});
const modal = new bootstrap.Modal(document.getElementById('createBlog'));
const btnCreate = document.getElementById('btnCreate') as HTMLButtonElement;
const msgError = document.querySelector('.modal-body .alert-danger') as HTMLDivElement;

fetchBlogs();

//Create blogs
btnCreate?.addEventListener('click', () => {
    const title = (document.querySelector('input[name="title"]') as HTMLInputElement).value;
    const author = (document.querySelector('input[name="author"]') as HTMLInputElement).value;
    const content = (document.querySelector('textarea[name="content"]') as HTMLInputElement).value;


    if(title !== "" && author !== "" && content !== ""){
        (async () => {
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });

            const res: IBlog = await rawResponse.json();
            console.log(res);

            addNewRow(res);
            toastAdd.show();
            modal.hide();
            //window.location.reload();
        })();
        msgError.style.display = 'none';
    }else{
        msgError.style.display = 'block';
        setTimeout(() => {
            msgError.style.display = 'none';
        }, 2000);
        return false;
    }
})


const addNewRow = (data: IBlog) => {
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
}


export {IBlog}