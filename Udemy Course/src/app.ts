// function Logger(constructor: Function) { //esta funcion se ejecuta al momento que se crea la class, no cuando se la instancia
//     console.log('Logging...');
//     console.log(constructor);
// }

function Logger(logString: string){ //haciendolo de esta manera podemos agregarle parametros personalizados, para poder usarlos dentro del decorator
    return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
}}

@Logger('LOGING - PERSON') //con esto se le indica que se ejecuta el decorator
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
        
    }
}

const pers1 = new Person();

console.log(pers1);
