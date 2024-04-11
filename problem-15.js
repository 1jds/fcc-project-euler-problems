// A maths approach...
// n!
// -------
// k!(n-k)!
// "The number of lattice paths from (0,0) to (n,k) is equal to the
// binomial coefficient (n + k)  <-- meant to be one big bracket here
//                      (  n  )  <-- meant to be one big bracket here" (https://en.wikipedia.org/wiki/Lattice_path)

function determineFactorial(n) {
  let result = n;
  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }
  return result;
}

function latticePaths(gridSize) {
  const n = gridSize + gridSize;
  let numerator = determineFactorial(n);
  let denominator =
    determineFactorial(gridSize) * determineFactorial(n - gridSize);
  let result = numerator / denominator;
  return Math.trunc(result);
}

console.log(latticePaths(2));
console.log(latticePaths(4));
console.log(latticePaths(9));
console.log(latticePaths(20));
