function add(num1, num2) {
    return num1 + num2;
}

const result = add(10, 20);
console.log(result)

// ========= normal function ==========

let added = (num1, num2) => {
    return num1 + num2;
}
const result1 = add(20, 20);
console.log(result1)

// ========== arraow function with 2 value by returning ==========

let add1 = text1 => text1;
const result2 = add1("Taskin Asghar");
console.log(result2);

// ========== arraow function with 1 value by returning =========

let add2 = () => {
    console.log("Hello Muslim World!")
}
add2()

// ========== arraow function without value & returning =========


