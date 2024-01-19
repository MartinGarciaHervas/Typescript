interface Named {
    readonly name: string
}

interface Greetable extends Named { // Se diferencia de un custon type en que: a) solo se pueden determinar estructuras de objetos, Esto hace que sea mas claro que lo que estas definiendo es la estructura de un objeto y no cualquier otra cosa. b) 
    greet(phrase: string): void;
}

class Person implements Greetable{ //Las interfaces se pueden implementar en clases, y pueden implementarse varias a la vez, lo que obliga a esa clase a cumplir con lo que la estructura de la interface.
    name: string; //esta propiedad no se va a poder cambiar porque en la interface le dijimos que era de readonly
    age = 26;

    constructor(n:string) {
        this.name = n
    }
    
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + '. I"m ' + this.age + ' years old');
    }

}

let user1: Greetable; //Aca podemos decir que user1 es de tipo Greetable, porque sabemos que la clase Person implementa a la interface greetable.

user1 = new Person('Martin')
// user1.name = 'Pepe' //*Esto va a dar error por el readonly que declaramos en la interface

user1.greet('Hi there!, I am')
