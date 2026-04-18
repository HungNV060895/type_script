export { };

console.log('OOP');

// class Lion {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

//     roar(): void {
//         console.log(`${this.name} is roaring!`);
//     }


// }

// Lion.prototype.roar = function () {
//     console.log(`${this.name} is roaring!`);
// }

// const simba = new Lion('Simba');
// simba.roar();


// class SinhVien {
//     //Thuộc tính
//     public name: string;
//     private age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`);
//         console.log(this.age);
//     }
// }

// const sinhvien = new SinhVien('Hung', 18);
// sinhvien.sleep();



// class Cat {
//     public name: string;
//     private color_: string;


//     //Setter and Getter
//     set setColor(color: string) {
//         this.color_ = color;
//     }

//     get getColor(): string {
//         console.log(this.color_);
//         return this.color_;
//     }

//     constructor(name: string, color: string) {
//         this.name = name;
//         this.color_ = color;
//     }

//     makeSount (){
//         console.log('Meo Meo');
//     }

// }

// const cat = new Cat('Tom', 'Red');
// cat.setColor = 'Blue';
// cat.getColor;
//cat.makeSount();



// class Animal {
// 	move() {
// 		console.log("Moving along!");
// 	}
// }

// class Dog extends Animal {
// 	woof(times: number) {
// 		for (let i = 0; i < times; i++) {
// 			console.log("woof!");
// 		}
// 	}
// 	move(){
// 		console.log("Dog Moving along!");
// 		super.move();
// 		//this.woof(5);
// 	}
// }


// const dog = new Dog();
// dog.move();
// dog.woof(3);



// class Base {
// 	greet() {
// 		console.log("Hello, world!");
// 	}
// }

// class Derived extends Base {
// 	greet(name?: string) {
// 		if (name === undefined) {
// 			super.greet();
// 		} else {
// 			console.log(`Hello, ${name.toUpperCase()}`);
// 		}
// 	}
// }

// const d = new Derived();
// d.greet();
// d.greet("reader");

// interface IAnimal {
// 	markSound(): void;
// 	doEat?:() => void;
// }


// interface IFly{
// 	doFly(): void
// }

// class Bird implements IAnimal, IFly{
// 	name: string | undefined;
// 	markSound(): void {
// 		console.log('Chip');
// 	}

// 	doEat(): void{
// 		console.log('Thịt');
// 	}

// 	doFly(): void {
// 		console.log('May bay');
// 	}
// }


// class Cat implements IAnimal{
// 	name: string | undefined;
// 	markSound(): void {
// 		console.log('Meo Meo');
// 	}
// }

// class Pig implements IAnimal{
// 	name: string | undefined;
// 	markSound(): void {
// 		console.log('Oink');
// 	}
// }


// const myBird = new Bird();
// const myCat = new Cat();
// const myPig = new Pig();
// // myCat.markSound();
// // myPig.markSound();
// // myBird.markSound();
// // myBird.doFly();

// const animals: IAnimal[] = [myBird, myCat, myPig];
// animals.forEach(animal => {
// 	animal.markSound();
// 	animal.doEat?.();
// });






abstract class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}

	abstract makeSound(): void;
}

class Dog extends Animal {
	makeSound() {
		console.log("Woof! Woof!");
	}
}

const myDog = new Dog("Buddy");
myDog.move(10);
myDog.makeSound();