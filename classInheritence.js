class Vehicle {
    constructor(name, color) {
        this.carName = name;
        this.color = color;
    }
    saySomething() {
        console.log("Hello Muslim World !!!")
    }

}

let obj1 = new Vehicle("HIAce Micro", "red");
let obj2 = new Vehicle("Honda", "green");
console.log(obj1)
console.log(obj2)

// ======= classes --- blueprint to create objects ========

// ================ class inheritence =================

class Car extends Vehicle {
    constructor(numWheel, color, name) {
        super(name, color)
        this.wheel = numWheel;
    }
}

let obj3 = new Car("AUDIO", "red", "cng");
console.log(obj3);