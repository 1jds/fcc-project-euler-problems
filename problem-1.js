// Problem 1: Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3Or5(number) {
  let arrayToReduce = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayToReduce.push(i);
    }
  }
  return arrayToReduce.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log(multiplesOf3Or5(10));
console.log(multiplesOf3Or5(49));
console.log(multiplesOf3Or5(1000));
console.log(multiplesOf3Or5(8456));
console.log(multiplesOf3Or5(19564));
