"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("speed of  animal: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 1000 });
//# sourceMappingURL=discriminated-unions.js.map