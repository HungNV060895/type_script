export { }


//Generic Class

class NumberBox<T> {
    content: T;
    constructor(content: T) {
        this.content = content;
    }
}

const numberBox = new NumberBox<number>(123);
const stringBox = new NumberBox<string>("Hello");