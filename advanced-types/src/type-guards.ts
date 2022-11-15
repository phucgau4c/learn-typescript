// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Phuc",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknownEmployee = Admin | Employee;

function printEmployeeUnkown(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ("startDate" in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

printEmployeeUnkown(e1);

class Car {
  driving() {
    console.log("is driving");
  }
}

class Truck {
  driving() {
    console.log("driving a truck...");
  }

  load(amount: number) {
    console.log("Loading " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.driving();
  if (vehicle instanceof Truck) {
    vehicle.load(100);
  }
}

useVehicle(v1);
useVehicle(v2);
