const point1 = {
    x: 1,
    y: 2
};
const point2 = {
    x: "Hello",
    y: "World"
};
const person = {
    name: "John",
    age: 30
};
// when the interface is created and the type is determined
const person2 = {
    name: "John",
    age: 30
};
const data1 = {
    data: "Hello"
};
const data2 = {
    data: 123
};
const data3 = {
    data: true
};
const data4 = {
    data: [1, 2, 3]
};
const data5 = {
    data: {
        name: "John",
        age: 30
    }
};
const data6 = {
    data: ["Hello", "World"]
};
const data7 = {
    data: [1, 2, 3]
};
const data8 = {
    data: [true, false, true]
};
const data9 = {
    data: [
        {
            name: "John",
            age: 30
        },
        {
            name: "Jane",
            age: 25
        }
    ]
};
const fetchUser = async () => {
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();
    const result = {
        status: 200,
        data: data
    };
    result.data.map((user) => {
        console.log(user.name);
    });
};
fetchUser();
export {};
