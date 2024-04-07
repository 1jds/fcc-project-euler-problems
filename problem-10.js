// Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below n.

function isPrimeNumberOptimised(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function primeSummation(n) {
  let result = 0;
  for (let i = n - 1; i > 1; i--) {
    if (isPrimeNumberOptimised(i)) {
      // console.log("the number in question... :", i)
      result += i;
    }
  }
  return result;
}

console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));
