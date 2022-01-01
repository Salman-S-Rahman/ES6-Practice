
const getTotal = (...total) => total;

const result = getTotal(10, 20, 30, 40);

console.log(result);


// ============= rest operator combined all value =============

// ============= spread operator spread out all value =============

const getResult = (x, y, ...z) => {
    console.log(`X= ${x} , Y= ${y} , Z = ${z}`);
}

getResult(10, 20, 30, 40, 50);


