function logLength(value) {
    console.log(value.length);
}
logLength('hungnv');
function testInterface(value) {
    console.log(value.id);
    console.log(value.name);
}
testInterface({
    id: 1,
    name: 'hungnv'
});
//Contain width class
class Animal {
    move() {
        console.log('Animal is moving....');
    }
}
class Dogs extends Animal {
    bark() {
        console.log('Dog is barking....');
    }
}
function testClass(value) {
    value.move();
    value.bark();
}
testClass(new Dogs());
///========================= Ràng buôc keyof ======================
//keyof được dùng để giới hạn generic type chỉ có thể là các key của một object. 
// Đây là cách mạnh mẽ để đảm bảo type safety khi làm việc với object properties.
//1. Cú pháp cơ bản
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: 'John', age: 30 };
const name = getProperty(person, 'name'); // ✅ OK
const age = getProperty(person, 'age'); // ✅ OK
//const email = getProperty(person, 'email'); // ❌ Error: 'email' không tồn tại
//2. Lấy type của value từ key
function getProperty2(obj, key) {
    return obj[key];
}
const person01 = { name: "John", age: 30 };
const name01 = getProperty(person, "name"); // ✅ type: string
const age01 = getProperty(person, "age"); // ✅ type: number
export {};
