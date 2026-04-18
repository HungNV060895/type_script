export { }


//Generic Interface

interface Point<T> {
    x: T;
    y: T;
}

const point1: Point<number> = {
    x: 1,
    y: 2
}

const point2: Point<string> = {
    x: "Hello",
    y: "World"
}

//Example:

type NameList<T> = {
    name: T;
    age: number;
}

const person: NameList<string> = {
    name: "John",
    age: 30
}

type SimpleNameList = {
    name: string;
    age: number;
}


// when the interface is created and the type is determined

const person2: SimpleNameList = {
    name: "John",
    age: 30
}





interface IDataString {
    data: string;
}

interface IDataNumber {
    data: number;
}

interface IData<T> {
    data: T
}


const data1: IData<string> = {
    data: "Hello"
}

const data2: IData<number> = {
    data: 123
}

const data3: IData<boolean> = {
    data: true
}

const data4: IData<number[]> = {
    data: [1, 2, 3]
}

const data5: IData<{
    name: string;
    age: number;
}> = {
    data: {
        name: "John",
        age: 30
    }
}

const data6: IData<string[]> = {
    data: ["Hello", "World"]
}

const data7: IData<number[]> = {
    data: [1, 2, 3]
}

const data8: IData<boolean[]> = {
    data: [true, false, true]
}

const data9: IData<{
    name: string;
    age: number;
}[]> = {
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
}


interface IAPIResponse<T> {
    status: number,
    data: T
}

interface IUser {
    name: string,
    email: string,
    id: number
}

const fetchUser = async () => {
    const response = await fetch('http://localhost:8000/users')
    const data = await response.json() as IUser[];

    const result: IAPIResponse<IUser[]> = {
        status: 200,
        data: data
    }

    result.data.map((user) => {
        console.log(user.name)
    })
}

fetchUser();