console.log('Lab 07');
const fetchBlogs = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();
    const tbody = document.querySelector("#blogs tbody");
    data.forEach(element => {
        tbody?.insertAdjacentHTML('beforeend', `<tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.author}</td>
                <td>${element.content}</td>
            </tr>`);
    });
};
fetchBlogs();
export {};
