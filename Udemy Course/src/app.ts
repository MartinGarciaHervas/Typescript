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