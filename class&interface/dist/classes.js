"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID:" + this.id);
    }
}
class AccountingDeparment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please pass in a valid value!!");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDeparment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDeparment("12", []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
}
console.log(Department.createEmployee("john"));
const it = new ITDepartment("1", ["max", "julian"]);
it.printEmployeeInformation();
it.describe();
console.log(it);
const accounting = AccountingDeparment.getInstance();
accounting.describe();
//# sourceMappingURL=classes.js.map