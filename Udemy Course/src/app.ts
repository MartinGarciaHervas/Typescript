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
        console.log(this.employees);
    }
}

class ITDepartment extends Department { //Al hacer esto, la clase ITDepartment ahora tiene todo lo que la clase Department tiene, y de esta manera, podemos agregarle cosas sin modificar a Department. si le agregamos un constructor, este va a reemplazar al de Department, asi que OJO
    constructor(id: string, public admins: string[]){
        super(id, 'IT'); //super es una funcion reservada que llama al constructor original (en este caso el de department). hay que llamarlo siempre que se cree otro constructor. Es lo PRIMERO que tiene que llamarse en el nuevo contructor.
    }

    printAdmins(){
        console.log(this.admins);
        
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReports(){
        console.log(this.reports);
        
    }
}

const accounting = new AccountingDepartment('A1', []);

accounting.describe();

accounting.addEmployee('Martin');
accounting.addEmployee('Roberto');

// accounting.employee[2] = 'Anna' //* ahora esto da error porque employee esta en privado.

accounting.printEmployeeInformation();

accounting.addReport('Todo perfe pa');
accounting.printReports()

const it = new ITDepartment('I1', ['Ricky'])

it.addEmployee('Pepito');
it.describe()
it.printAdmins()