class Department {
    name: string; //Aca se ponen las keys que queres que tengan los objetos de estas clases

    constructor(n: string){ //esta funcion reservada se ejecuta cada vez que se crea un objeto de la clase, entonces es como algo que se ejecuta al inicializarse.
        this.name = n
    }
}

const accounting = new Department('Accounting')

console.log(accounting);
