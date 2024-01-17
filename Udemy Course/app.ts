function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString(); //en el caso de que sea un number y un string
    }
    return result
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna')
console.log(combinedNames); 

const literalType = 5 //esto es un literal type, porque al ser una const no puede cambiar, y ya se le esta diciendo que es 5. entonces su tipo es 5.

let literalType2: "chau" | "hola" //aca pasa lo mismo, solo que yo le estoy diciendo que tiene que ser o un hola o un chau