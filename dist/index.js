console.log('video 100');
const test = ['hungnv', 25, true];
const test1 = ['hungnv', 25, true];
const btn = document.getElementById('myBtn');
const input = document.getElementById('name');
//Types Assertions (Ép kiểu type)
btn?.addEventListener('click', () => {
    alert(input?.value);
});
export {};
// interface IUser {
//     id: number,
//     email: string,
//     name: string,
// }
// const fetchUser = async() => {
//     const res = await fetch('http://localhost:8000/users');
//     // const data = (await res.json()) as IUser[];
//     const data: IUser[] = await res.json();
//     console.log(data[0].email);
// }
// fetchUser();
