//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// -> this same operation by ech element

function addOne(i) {
    return i+1;
}

let aTest = [2.14,NaN+3,8.99,9e2];


let aTestMap1 = aTest.map(addOne);
let aTestMap2 = aTest.map((value, index, array) => {
    return value + 1;
})
let aTestMap3 = Array.prototype.map.call(aTest, (value, index, array) => {
    return value + 1;
})
let aTestMap4 = aTest.map(parseInt);

console.log(aTest ); //[ 2.14, NaN, 8.99, 900 ]
console.log(aTestMap1); //[ 3.14, NaN, 9.99, 901 ]
console.log(aTestMap2); //[ 3.14, NaN, 9.99, 901 ]
console.log(aTestMap3); //[ 3.14, NaN, 9.99, 901 ]
console.log(aTestMap4); //[ 2, NaN, NaN, NaN ]
