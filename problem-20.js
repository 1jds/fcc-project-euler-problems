function findFactorial(num) {
  if (num === 0n || num === 1n) {
    return 1n;
  }
  return num * findFactorial(num - 1n);
}

function sumFactorialDigits(n) {
  let factored = findFactorial(BigInt(n));
  console.log(factored);
  let sum = factored
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
  return sum;
}

sumFactorialDigits(100);
