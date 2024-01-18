class Department {
    // private name: string; //Aca se ponen las keys que queres que tengan los objetos de estas clases
    private employees: string[] = [] //al agregarle el private(solo en TS), esto obliga a los developers a usar los metodos que alteran a esta property, y no permitiendoles cambiarla de cuaoquier manera. asi te aseguras de que si o si pasen por el codigo que esta en el metodo. //* PRIVATE se puede usar tambien en metodos.

    constructor(private readonly id:string, public name: string){ //esta funcion reservada se ejecuta cada vez que se crea un objeto de la clase, entonces es como algo que se ejecuta al inicializarse. //* las keys que se inicializen aqui, no hace falta que las inicialicemos antes, como name por ejemplo.
        // this.name = n;
    }

    describe() { //asi se crean metodos dentro de la clase
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('A1', 'Accounting');

accounting.describe();

accounting.addEmployee('Martin');
accounting.addEmployee('Roberto');

// accounting.employee[2] = 'Anna' //* ahora esto da error porque employee esta en privado.

accounting.printEmployeeInformation();
