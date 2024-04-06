// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// What is the nth prime number?

function isPrimeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrimeNumber(n) {
  n++;
  while (!isPrimeNumber(n)) {
    n++;
  }
  return n;
}

function nthPrime(n) {
  let currentPrime = 2;
  let numberOfPrimesFound = 1;
  while (numberOfPrimesFound < n) {
    currentPrime = nextPrimeNumber(currentPrime);
    numberOfPrimesFound++;
  }
  return currentPrime;
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));
