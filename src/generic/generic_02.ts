export { }

type MyArrString = string[];

type MyArrNumber = number[];

type MyArr<T> = T[];

type Wrapper<T> = {
    data: T;
    age: number;
}

const arr1: MyArrString = ["a", "b", "c"];
const arr2: MyArrNumber = [1, 2, 3];
const arr3: MyArr<boolean> = [true, false, true];

const obj1: Wrapper<string> = {
    data: "Hello",
    age: 20
}

const obj2: Wrapper<number> = {
    data: 20,
    age: 30
}

const obj3: Wrapper<boolean> = {
    data: true,
    age: 40
}

function print<T>(args: T) {
    console.log(args);
}

print<string>("Hello");
print<number>(123);
print<boolean>(true);
print<Wrapper<string>>(obj1);
