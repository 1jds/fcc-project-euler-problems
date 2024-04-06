// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all
// of the numbers from 1 to n?

function isWithoutRemainders(n, testNumber) {
  for (let i = 1; i <= n; i++) {
    if (testNumber % i != 0) {
      return false;
    }
  }
  return true;
}

function smallestMult(n) {
  let testNumber = n;
  while (true) {
    if (isWithoutRemainders(n, testNumber)) {
      return testNumber;
    }
    testNumber++;
  }
}

console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));
