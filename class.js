class Vehicle {
    myVar = "Yes";
    constructor(name, color) {
        this.carName = name;
        this.color = color;
    }
    saySomething() {
        console.log("Hello Muslim World !!!")
    }
    sayColor() {
        console.log(this.color);
    }
}

let obj1 = new Vehicle("HIAce Micro", "red");
let obj2 = new Vehicle("Honda", "green");
console.log(obj1)
console.log(obj2)

obj1.saySomething();
obj1.sayColor();
obj2.sayColor()

// ======= classes --- blueprint to create objects ========