// Problem 17: Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?
// For my solution, this should work past the limit in the exercise of 1,000. It should work up to 999,999

const equivalenceTable = {
  0: 0,
  1: 3,
  2: 3,
  3: 5,
  4: 4,
  5: 4,
  6: 3,
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 6,
  12: 6,
  13: 8,
  14: 8,
  15: 7,
  16: 7,
  17: 9,
  18: 8,
  19: 8,
  20: 6,
  30: 6,
  40: 5,
  50: 5,
  60: 5,
  70: 7,
  80: 6,
  90: 6,
  1000: 11,
};

function valuesCalc(num) {
  let smalls = num % 100;
  let smallsValue = 0;
  if (smalls <= 20) {
    smallsValue = equivalenceTable[smalls];
  } else {
    let onesPlace = num % 10;
    let tensPlace = Math.trunc((num % 100) / 10) * 10;
    smallsValue = equivalenceTable[onesPlace] + equivalenceTable[tensPlace];
  }
  let hundredsPlace = Math.trunc(num / 100);

  let total = smallsValue + equivalenceTable[hundredsPlace];
  if (hundredsPlace > 0) {
    total += 7; //for 'hundred'
  }
  return total;
}

function addUp(num) {
  if (equivalenceTable[num]) {
    return equivalenceTable[num];
  }
  let counter = 0;

  let theThousands = Math.trunc(num / 1000);
  if (theThousands > 0) {
    counter += 8; // + 8 for 'thousand'
  }
  if (theThousands > 100 && theThousands % 100 != 0) {
    counter += 3; // + 3 for 'and'
  }

  counter += valuesCalc(theThousands);

  let theHundreds = num % 1000;
  if (theHundreds < 100 && theThousands > 0) {
    counter += 3; // for, for e.g., 1,001 one-thousand-AND-one
  }
  if (theHundreds > 100 && theHundreds % 100 != 0) {
    counter += 3; // + 3 for 'and'
  }
  counter += valuesCalc(theHundreds);
  return counter;
}

function numberLetterCounts(num) {
  let result = 0;
  let counter = 1;
  while (counter <= num) {
    result += addUp(counter);
    counter++;
  }
  return result;
}

console.log(numberLetterCounts(1002));
