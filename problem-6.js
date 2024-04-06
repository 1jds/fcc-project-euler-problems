// Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n
// natural numbers and the square of the sum.

function getArrayOfNums(n) {
  let arrOfNums = [];
  for (let i = 1; i <= n; i++) {
    arrOfNums.push(i);
  }
  return arrOfNums;
}

function sumOfSquares(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue ** 2
  );
}

function squareOfSums(arr) {
  return (
    arr.reduce((accumulator, currentValue) => accumulator + currentValue) ** 2
  );
}

function sumSquareDifference(n) {
  let arrOfNums = getArrayOfNums(n);
  return squareOfSums(arrOfNums) - sumOfSquares(arrOfNums);
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));
