//Display Table
const tableBody = document.querySelector("#tableBlog tbody");
const fetchBlogs = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();
    data.forEach((element, index) => {
        tableBody?.insertAdjacentHTML('beforeend', `<tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.author}</td>
                <td>
                    <button class="btn btn-warning btn-edit"
                        data-id=${element.id}
                        data-title=${JSON.stringify(element.title)}
                        data-author=${JSON.stringify(element.author)}
                        data-content=${JSON.stringify(element.content)}>Edit</button>
                    <button class="btn btn-danger btn-delete" data-id=${element.id}>Delete</button>
                </td>
            </tr>`);
    });
};
export { fetchBlogs };
