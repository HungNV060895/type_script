
// console.log('1');

//async


// const myPromise = (() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2');
//             resolve('hungnv');
//         }, 2000);
//     })
// })

// const tesst = myPromise();

// console.log(tesst);

// console.log('1');
// myPromise().then((data) => {
//     console.log(data);
//     console.log('3');
// })


//Fetch API
// const temp = fetch('http://localhost:8000/users');

// temp
//     .then((res) => { res.json()
//     .then((data) => { console.log(data); });
// })


//++++++++++++++++++Try/Catch
// const doSomething = () => {
//     const a = 10, b = 0;
//     if(b === 0){
//         throw new Error('b khong duoc bang 0');
//     }

//     return a / b;
// }

// try {
//     doSomething();
// } catch (error) {
//     console.log(error);
// }


//+++++++++++++Callback, Callbacl Hell

// const greeting = (name, hungnv) => {
//     console.log('Xin chào', name);
//     hungnv();
// }


// const hello = (cb) => {
//     console.log('Hello');
// }

// greeting('hungnv', hello);


//Async/Await
// fetch('http://localhost:8000/users')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


    const fetchData = async () => {
        const res = await fetch('http://localhost:8000/users');
        const data = await res.json();
        console.log(data);
    }

    fetchData();