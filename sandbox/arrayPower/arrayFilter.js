//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -> as  filter ;)

const aFruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function searchInArrayFruit(sSearchPatern) {
    let aMatch = aFruits.filter((value, index, array) => {
        return (value.indexOf(sSearchPatern) > - 1)
    })
    return aMatch;
}


let aFilterTest1 =  searchInArrayFruit('an');
console.log(aFilterTest1); //[ 'banana', 'mango', 'orange' ]
let aFilterTest2 = searchInArrayFruit('ap');
console.log(aFilterTest2); //[ 'apple', 'grapes' ]

let aFilterTest3 = aFruits.filter(value => value.indexOf('an') > -1)
console.log(aFilterTest3); //[ 'banana', 'mango', 'orange' ]
let aFilterTest4 = aFruits.filter((value, index, array) => value.indexOf('ap') > -1)
console.log(aFilterTest4); //[ 'apple', 'grapes' ]

// @ToDo two array include not include

let aFirst = [2.987, 4, 9e3, 3, 2, 1, 4, 1, 1, 1];
let aSecond = [ 2, 1, 1, 300, 600, 900 ];