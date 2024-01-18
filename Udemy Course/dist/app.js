"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const accounting = new Department('A1', 'Accounting');
accounting.describe();
accounting.addEmployee('Martin');
accounting.addEmployee('Roberto');
accounting.printEmployeeInformation();
const it = new ITDepartment('I1', ['Ricky']);
console.log(it);
it.addEmployee('Pepito');
it.describe();
