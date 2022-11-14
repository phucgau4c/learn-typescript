// Code goes here!
abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  // describe(this: Department) {
  //   console.log(`Department ${this.id} ${this.name}`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(): void {
    console.log("IT Department - ID:" + this.id);
  }
}

class AccountingDeparment extends Department {
  private lastReport: string;
  private static instance: AccountingDeparment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
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

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }
}

console.log(Department.createEmployee("john"));

const it = new ITDepartment("1", ["max", "julian"]);

// it.addEmployee("max");
// it.addEmployee("julian");

it.printEmployeeInformation();

it.describe();
console.log(it);

// const accounting = new AccountingDeparment("2", []);
const accounting = AccountingDeparment.getInstance();

// accounting.addReport("some thing wrong...!!");
// accounting.printReports();
// accounting.mostRecentReport = "wrong";
// console.log(accounting.mostRecentReport);

accounting.describe();

// const accountingCopy = { name: "acc", describe: accounting.describe };

// accountingCopy.describe();
