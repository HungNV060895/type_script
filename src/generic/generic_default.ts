export{}

interface ITest<T = string>{
    data: T
}

function printValue<T = string>(value: T){
    return value;
}

const a = printValue('tsst');

const b: ITest = {
    data: "123"
}

const c: ITest<Boolean> = {
    data: true
}