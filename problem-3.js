// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

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

function largestPrimeFactor(number, i = 2) {
  if (isPrimeNumber(number)) {
    return number;
  }
  let complete = false;
  while (!complete) {
    if (number % i === 0) {
      complete = true;
      return largestPrimeFactor(number / i);
    }
    i = nextPrimeNumber(i);
  }
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
