export { }

class User {
    constructor(public name: string, private email: string, public role: 'student' | 'teacher' = 'student') { }

    get valueEmail(): string {
        return this.email;
    }

    set valueEmail(value: string) {
        if (!value.includes('@')) {
            throw new Error('Sai định dạng email');
        }
        this.email = value;
    }

    getInfo() {
        console.log(`Name : ${this.name}`)
        console.log(`Email : ${this.email}`)
        console.log(`Role : ${this.role}`)
    }
}


class Student extends User {

    grade: number;

    constructor(name: string, email: string, grade: number) {
        super(name, email, 'student')
        this.grade = grade
    }

    showInfo() {
        super.getInfo();
        console.log(`Grade : ${this.grade}`)
    }
}







const user = new User("John", "[EMAIL_ADDRESS]", "student")
user.getInfo();


const student = new Student("John", "john@gmail.com", 10)
student.showInfo();


try {
    user.valueEmail = "[EMAIL_ADDRESS]";
    console.log(user.valueEmail);
} catch (error: any) {
    console.error(error.message)
}