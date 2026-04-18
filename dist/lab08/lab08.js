console.log('Lab 08');
class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? 'student';
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    printUserInfor() {
        console.log(`Name: ${this.name}, Email: ${this._email}, Role: ${this.role}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.course = [];
    }
    addCourse(course) {
        this.course.push(course);
    }
    printUserInfor() {
        const courseName = this.course.join(', ');
        console.log(`Course ${courseName} added successfully of [Teacher] ${this.name}`);
    }
}
class Student extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.enrolledCourses = [];
    }
    enroll(course) {
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
export {};
