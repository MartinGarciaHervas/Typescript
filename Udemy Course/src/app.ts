type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee; //El resultado de esto es que unis a los dos types en uno, lo que se llama intersection types. Puede ser usado con cualquier type.

const e1: ElevatedEmployee = { //tiene que tener las props de Admin y Employee.
    name: 'Martin',
    privileges: ['Free Food'],
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string'){ //Esto que hacemos aca se lo llama type guard, porque te asegura el type del resultado, en este caso string o number, y no un resultado que puede ser ambos.
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
console.log('Name: ' + emp.name);
if('privileges' in emp){ // En este otro tipo de Type Guard, en el cual no podemos usar el chequeo de typeof, dado que va a dar object y eso no nos cambia, Lo que usamos es 'in'. lo que permite esto es chequear si en el objeto emp existe la propiedad privileges en este caso.
    console.log('Privileges: ' + emp.privileges);
}
if ('startDate' in emp){
    console.log('Start Date: ' + emp.startDate);
}
}

printEmployeeInformation(e1)
printEmployeeInformation({name: 'Pepe', startDate: new Date()})
printEmployeeInformation({name: 'Max', privileges: ['Parking']})



class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');   
    }

    loadCargo(amount: number){
        console.log('Loading cargo ... ' + amount);
        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){ //En este caso usamos instanceof, que busca que vehicle sea una instancia de Truck y no de Car, en ese caso sabemos que la propiedad loadCargo existe. Esto lo usamos en clases.
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
    species: 'bird' //aca se le asigna un literal type a species. es decir que en este caso, species tiene que ser 'bird' si o si.
    flyingSpeed: number
}

interface Horse {
    species: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.species){ //ahora con esto podemos usar un switch para las species, a esto se le llama Discriminating Unions.
        case 'bird': //TS ya sabe que sepceis tenemos, entonces es facil
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({species: 'bird', flyingSpeed:1000})

// const userInputElement = <HTMLInputElement>document.getElementById('user')!; //Tenemos que indicarle el tipo de HTMLElement que estamos tomando, porque TS no sabe cual es, y no se puede meterse a chsumear, entonces de esta manera le indicamos que es un input. tambien ponemos un ! para indicarle a typescript que este valor nunca va a ser Null.

const userInputElement = document.getElementById('user')! as HTMLInputElement; //Esta es otra manera que al parecer esta buena cuando trabajas con react, porque la otra connotacion choca con algo de react.

userInputElement.value = 'Hi There!';



interface ErrorContainer {
    [key: string]: string; //Lo que hacemos aca es declarar un index Type. Esto lo que nos permite es indicar que no sabemos con exactitud que propiedades ni cuantas de ellas van a estar en ErrorContainer, pero si sabemos que su key va a ser un string, y su value tambien. De esta manera es super flexible.
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    userName: 'Must start with a character!'
}