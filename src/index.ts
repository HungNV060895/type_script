export { };

console.log('video 100');

// type role = string | number;

// const user: role = 'user';
// const admin: role = 'admin';

// type User = {
//     name: string
// };

// const user: User | null = null;

// let user1 = { name: "Hung" };

// if(user){
//     console.log(user1.name);
// }

// const printInfo = (myName: string | null) => {
//     myName?.charCodeAt(0);
//     console.log('Name is ', myName)
// }


// printInfo('Hung');


//Literal Types
// type TSupperRole = 'ADMIN' | 'SUPPER ADMIN' | 'USER';

// const user: TSupperRole = 'USER';
// const admin: TSupperRole = 'ADMIN';

// enum RoleEnum {
//     USER = 'USER', ADMIN = '121212', SUPPERADMIN = 'SUPPER ADMIN'
// }

// const myRole1: RoleEnum = RoleEnum.ADMIN;
// console.log(myRole1);


type TTuple = [string, number, boolean];


const test = ['hungnv', 25, true];


const test1: TTuple = ['hungnv', 25, true];


//Intersection Type

//Interface

interface IUser {
    name: string;
    age: number;
}

interface IAdmin extends IUser {
    role: string;
}

const btn = document.getElementById('myBtn');
const input = document.getElementById('name') as HTMLInputElement;



//Types Assertions (Ép kiểu type)
btn?.addEventListener('click', () => {
    alert(input?.value);
})

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