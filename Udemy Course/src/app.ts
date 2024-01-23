// function Logger(constructor: Function) { //esta funcion se ejecuta al momento que se crea la class, no cuando se la instancia
//     console.log('Logging...');
//     console.log(constructor);
// }

function Logger(logString: string){ //haciendolo de esta manera podemos agregarle parametros personalizados, para poder usarlos dentro del decorator
    return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
}}

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
        const hookElement = document.getElementById(hookId)
        const p = new constructor()
        if(hookElement){
            hookElement.innerHTML = template
            hookElement.querySelector('h1')!.textContent = p.name
        }
    }
}


// @Logger('LOGING - PERSON') //con esto se le indica que se ejecuta el decorator
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
        
    }
}

const pers1 = new Person();

console.log(pers1);

// ---

function Log(target: any, propertyName: string | Symbol){
    console.log('Property decorator!');
    console.log(target, propertyName);   
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        } else {
            throw new Error('Invalid pirce - should be positive!')
        }
    }

    constructor(t:string, p: number) {
        this.title = t;
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax)
    }
}