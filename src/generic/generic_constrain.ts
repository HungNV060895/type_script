export { }

function logLength<T extends { length: number }>(value: T) {
	console.log(value.length);
}

logLength('hungnv');


//Contain width Interface
interface IUser {
	id: number,
	name: string
}
function testInterface<T extends IUser>(value: T) {
	console.log(value.id);
	console.log(value.name);
}


testInterface({
	id: 1,
	name: 'hungnv'
})


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


function testClass<T extends Animal & Dogs>(value: T) {
	value.move();
	value.bark();
}

testClass(new Dogs());


///========================= Ràng buôc keyof ======================
//keyof được dùng để giới hạn generic type chỉ có thể là các key của một object. 
// Đây là cách mạnh mẽ để đảm bảo type safety khi làm việc với object properties.


//1. Cú pháp cơ bản
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

const person = { name: 'John', age: 30 };
const name = getProperty(person, 'name');// ✅ OK
const age = getProperty(person, 'age');// ✅ OK
//const email = getProperty(person, 'email'); // ❌ Error: 'email' không tồn tại

//2. Lấy type của value từ key
function getProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const person01 = { name: "John", age: 30 };
const name01: string = getProperty(person, "name"); // ✅ type: string
const age01: number = getProperty(person, "age");   // ✅ type: number