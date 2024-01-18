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
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    printAdmins() {
        console.log('Admins', this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(employee) {
        if (employee === 'Martin') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log('Reports', this.reports);
    }
}
const accounting = new AccountingDepartment('A1', []);
accounting.describe();
accounting.addEmployee('Martin');
accounting.addEmployee('Roberto');
accounting.printEmployeeInformation();
accounting.addReport('Todo perfe pa');
accounting.printReports();
const it = new ITDepartment('I1', ['Ricky']);
it.describe();
it.addEmployee('Martin');
it.printEmployeeInformation();
it.printAdmins();
