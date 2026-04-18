const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const arr3 = [true, false, true];
const obj1 = {
    data: "Hello",
    age: 20
};
const obj2 = {
    data: 20,
    age: 30
};
const obj3 = {
    data: true,
    age: 40
};
function print(args) {
    console.log(args);
}
print("Hello");
print(123);
print(true);
print(obj1);
export {};
