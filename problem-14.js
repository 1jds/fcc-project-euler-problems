// Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under the given limit, produces the longest chain?
// Note: Once the chain starts the terms are allowed to go above limit.

function findChainLength(startingNumber) {
  let n = startingNumber;
  let chainCount = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
      chainCount++;
    } else {
      n = n * 3 + 1;
      chainCount++;
    }
  }
  return chainCount;
}

function longestCollatzSequence(limit) {
  let startingNumber = limit - 1;
  let longestChainSoFar = 0;
  let startingNumWhichProducesLongestChain = 0;
  while (startingNumber > 0) {
    const newNumberToTest = findChainLength(startingNumber);
    if (newNumberToTest > longestChainSoFar) {
      longestChainSoFar = newNumberToTest;
      startingNumWhichProducesLongestChain = startingNumber;
    }
    startingNumber--;
  }
  return startingNumWhichProducesLongestChain;
}

console.log(
  "For the given 'limit', the starting number under that limit which produces the longest chain is..."
);
console.log("14 ...", longestCollatzSequence(14));
console.log("5847 ...", longestCollatzSequence(5847));
console.log("46500 ...", longestCollatzSequence(46500));
console.log("54512 ...", longestCollatzSequence(54512));
console.log("1e5 ...", longestCollatzSequence(1e5));
console.log("1e6 ...", longestCollatzSequence(1e6));
