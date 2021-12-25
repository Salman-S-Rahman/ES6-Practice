class Vehicle {
    myVar = "Yes";
    constructor(name, color, brand) {
        this.carName = name;
        this.carcolor = color;
        this.carbrand = brand;
    }
    saySomething() {
        console.log("Hello Muslim World !!!")
    }
    set sayBrand(brand) {
        this.brand = brand;
    }
    // ======= set new property & value in it =========
    get getDetails() {
        return this.carName + " " + this.carcolor + " " + this.carbrand;
    }

}

let obj1 = new Vehicle("HIAce Micro", "red", "nanana");
let obj2 = new Vehicle("Honda", "green", "sasasa");
console.log(obj1)
console.log(obj2)

obj1.sayBrand = "lalala";
console.log(obj1.brand);

console.log(obj1.getDetails);
console.log(obj2.getDetails);

