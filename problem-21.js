// Problem 21: Amicable numbers
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under n.

function sumProperDivisors(n) {
  let counter = n - 1;
  let arrOfProperDivisors = [];
  while (counter > 0) {
    if (n % counter === 0) {
      arrOfProperDivisors.push(counter);
    }
    counter--;
  }
  // console.log(arrOfProperDivisors);
  return arrOfProperDivisors.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log("d(220) =", sumProperDivisors(220));
console.log("d(284) =", sumProperDivisors(284));

function sumAmicableNum(n) {
  let counter = n - 1;
  let listAofProperDivisorsUnderN = [];
  let listBofProperDivisorsUnderN = [];
  while (counter > 0) {
    let sumofProperDivisors1 = sumProperDivisors(counter);
    let sumofProperDivisors2 = sumProperDivisors(sumofProperDivisors1);
    if (counter === sumofProperDivisors2) {
      // then we have an amicable pair
      listAofProperDivisorsUnderN.push(counter);
      listBofProperDivisorsUnderN.push(sumofProperDivisors1);
    }
    counter--;
  }
  console.log(
    "List A",
    listAofProperDivisorsUnderN,
    "List B",
    listBofProperDivisorsUnderN
  );
}

sumAmicableNum(1000);
