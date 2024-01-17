function add(n1: number, n2:number) {
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' + num);
}

//Esta function tiene como tipo de resultado a VOID, esto es porque no retorna nada.

printResult(add(5, 12))

let combinedValues: (a: number, b:number)=>number;

combinedValues = add;

console.log(combinedValues(8, 8));
