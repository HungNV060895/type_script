export { }

function testNumber(value: number) {
    return value;
}

function testString(value: string) {
    return value;
}

//<T> là kiểu dữ liệu generic
//(value: T) là tham số có kiểu dữ liệu generic
//: T là kiểu dữ liệu trả về
//Nó giúp cho hàm có thể nhận nhiều kiểu dữ liệu khác nhau  
function testGeneric<T>(value: T): T {
    return value;
}

function testGenericArr<T>(arr: T[]): T[] {
    return arr;
}

const testNumber01 = testGeneric<number>(123);

const testArr = testGenericArr<number>([1, 2, 3]);

const testArrString = testGenericArr<string>(['a', 'b', 'c']);

console.log(testArrString);


function getFirstElInArr<T>(arr: T[]) {
    return arr[0];
}

const getFirstElInArr01 = <T>(arr: T[]) => {
    return arr[0];
}

const a1 = getFirstElInArr<number>([1, 2, 3]);
console.log(a1);
const a2 = getFirstElInArr<string>(['a', 'b', 'c']);
console.log(a2);
const a3 = getFirstElInArr<boolean>([true, false, true]);
console.log(a3);