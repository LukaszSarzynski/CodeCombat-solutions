//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a

let aTest = [1, 2, 3];

let nReduceTest1 = aTest.reduce( (prevValue, currValue, currIndex, array) => prevValue + currValue );
console.log(nReduceTest1); // 6
