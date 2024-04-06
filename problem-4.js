// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.

function isPalindromic(int) {
  let stringedInt = "" + int;
  let reversedStr = stringedInt.split("").reverse().join("");
  if (stringedInt === reversedStr) {
    return true;
  }
  return false;
}

function largestPalindromeProduct(n) {
  let possibleInts = [];
  let lowest = 1;
  let highest = 9;
  if (n > 1) {
    let tempLowest = "1";
    for (let i = 1; i < n; i++) {
      tempLowest = tempLowest + "0";
    }
    let tempHighest = tempLowest + "0";
    lowest = tempLowest * 1;
    highest = tempHighest * 1 - 1;
  }

  for (let i = lowest; i <= highest; i++) {
    for (let j = lowest; j <= highest; j++) {
      possibleInts.push(i * j);
    }
  }
  return possibleInts
    .filter((item) => isPalindromic(item))
    .reduce((accumulator, currentValue) => {
      return currentValue > accumulator ? currentValue : accumulator;
    });
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));
