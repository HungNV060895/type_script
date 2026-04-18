function testNumber(value) {
    return value;
}
function testString(value) {
    return value;
}
//<T> là kiểu dữ liệu generic
//(value: T) là tham số có kiểu dữ liệu generic
//: T là kiểu dữ liệu trả về
//Nó giúp cho hàm có thể nhận nhiều kiểu dữ liệu khác nhau  
function testGeneric(value) {
    return value;
}
function testGenericArr(arr) {
    return arr;
}
const testNumber01 = testGeneric(123);
const testArr = testGenericArr([1, 2, 3]);
const testArrString = testGenericArr(['a', 'b', 'c']);
console.log(testArrString);
function getFirstElInArr(arr) {
    return arr[0];
}
const getFirstElInArr01 = (arr) => {
    return arr[0];
};
const a1 = getFirstElInArr([1, 2, 3]);
console.log(a1);
const a2 = getFirstElInArr(['a', 'b', 'c']);
console.log(a2);
const a3 = getFirstElInArr([true, false, true]);
console.log(a3);
export {};
