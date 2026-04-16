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


class SinhVien {
    //Thuộc tính
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}