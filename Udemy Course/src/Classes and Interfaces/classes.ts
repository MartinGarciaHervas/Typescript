abstract class Department {  //* Ahora que la hicimos abstract a esta clase, no se puede crear una instancia (objeto) de ella, solo se puede extender
    // private name: string; //Aca se ponen las keys que queres que tengan los objetos de estas clases
    protected employees: string[] = [] //al agregarle el private(solo en TS), esto obliga a los developers a usar los metodos que alteran a esta property, y no permitiendoles cambiarla de cuaoquier manera. asi te aseguras de que si o si pasen por el codigo que esta en el metodo. //* PRIVATE se puede usar tambien en metodos.

    constructor(protected readonly id:string, public name: string){ //esta funcion reservada se ejecuta cada vez que se crea un objeto de la clase, entonces es como algo que se ejecuta al inicializarse. //* las keys que se inicializen aqui, no hace falta que las inicialicemos antes, como name por ejemplo.
        // this.name = n;
    }

    abstract describe():void; //al hacer esto, lo que estamos creando es un metodo abstracto, (para esto hay que declarar la clase como abstracta tambien), lo que esto genera, es que forzas a los developers a crear un metodo llamado describe en cada instancia de Department, solo que va a ser personalizado en cada instancia. Si una instancia no crea a describe, le salta error.

    addEmployee(employee: string){ //asi se crean metodos dentro de la clase
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

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }

    printAdmins(){
        console.log('Admins', this.admins);
        
    }
}

class AccountingDepartment extends Department {
    private lastReport: string; //En este caso al ser privada, y no tener ningun metodo que imprima este report, podemos crear lo que se llama un GETTER

    get mostRecentReport(){ //Ahora con este getter, podemos mostrar un propiedad que tiene como modifier PRIVATE. 
        if(this.lastReport){
            return this.lastReport
        }
        return 'No report found.'
    }

    set mostRecentReport(value: string){ //esto es como un metodo para cambiar esta variable, es parecido. fijate que llamo a otro metodo existente, para justamente setear, en este caso, el lastReport.
        if(!value){
            throw new Error('Please add a valid value!')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(employee: string) { //podemos sobreescribir los metodos si queremos
        if(employee === 'Martin'){
            return;
        }
        this.employees.push(employee) //en este caso, al ser employee PRIVATE, tampoco va a estar disponible para las clases que heredan a Department, es por eso que en vez de private, podemos usar PROTECTED. basicamente es igual, solo que permite que las clases que heredan, tambien tengan acceso a esa propiedad
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log('Reports', this.reports);
        
    }
}

const accounting = new AccountingDepartment('A1', []);

accounting.describe(); //Ahora cada describe va a ser personalizado por su propio departamento(instancia de Department)

accounting.addEmployee('Martin'); //esto no va a funcionar, porque sobreescribimos el metodo addEmployee y no permitimos agregar a martin.
accounting.addEmployee('Roberto');
accounting.printEmployeeInformation();

// accounting.employee[2] = 'Anna' //* ahora esto da error porque employee esta en privado.


accounting.addReport('Todo perfe pa');
accounting.addReport('Todo sigue perfe pa');
console.log(accounting.mostRecentReport); //si queremos acceder a lastReport directamente no va a aparecer porque es private. En cambio llamamos al getter que creamos, SIN ejecutarlo, y este va a mostrarnos lo que le pedimos
accounting.mostRecentReport = 'Se fue todo a la goma' //por mas que el nombre sea el mismo, aca estoy accediendo al setter, y no al getter. Esto se debe que le puse el =, y despues del igual va el parametro.
console.log(accounting.mostRecentReport);


accounting.printReports()

const it = new ITDepartment('I1', ['Ricky'])

it.describe() 

it.addEmployee('Martin'); //aca si va a funcionar porque usamos el metodo original.
it.printEmployeeInformation()
it.printAdmins()