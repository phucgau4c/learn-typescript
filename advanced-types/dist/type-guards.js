"use strict";
const e1 = {
    name: "Phuc",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeUnkown(emp) {
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
    load(amount) {
        console.log("Loading " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.driving();
    if (vehicle instanceof Truck) {
        vehicle.load(100);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=type-guards.js.map