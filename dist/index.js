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
