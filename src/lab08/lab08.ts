console.log('Lab 08');

type TRole = 'student' | 'teacher';

interface IUser {
    printUserInfor(): void;
}

class User implements IUser {
    public name: string;
    private _email: string;

    protected role: TRole;

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? 'student';
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    printUserInfor() {
        console.log(`Name: ${this.name}, Email: ${this._email}, Role: ${this.role}`);
    }
}

class Teacher extends User implements IUser {
    course: string[] = [];

    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }

    addCourse(course: string) {
        this.course.push(course);
    }

    printUserInfor() {
        const courseName = this.course.join(', ');
        console.log(`Course ${courseName} added successfully of [Teacher] ${this.name}`);
    }
}



class Student extends User implements IUser {
    enrolledCourses: string[] = [];


    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }

    enroll(course: string): void {
        this.enrolledCourses.push(course);
    }

    printUserInfor() {
        const courseName = this.enrolledCourses.join(', ');
        console.log(`Courses: ${courseName} from [Student] ${this.name}`);
    }
}




// const user = new User('HungNV', 'hung@gmail.com', 'teacher');
// user.getInfo();

// const user2: IUser[] = [new Teacher(' HungNV', 'teacher@gmail.com', 'teacher', ['TS', 'AI']), new Student('HungNV95', 'hungnv95@gmail.com', 'student', [])];

// user2.forEach(user => {
//     user.getInfo();
// });

const teacher = new Teacher('HungNV', 'teacher@gmail.com', 'teacher');
teacher.addCourse('Math');
teacher.addCourse('Physics');
teacher.printUserInfor();


const student = new Student('HungNV95', 'hungnv95@gmail.com', 'student');
student.enroll('Math');
student.enroll('Physics');
student.printUserInfor();




export { };