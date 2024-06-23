// Problem 19: Counting Sundays
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.

// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.

// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const monthsLookupTable = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const isLeapYear = (yearToTest) => {
  // A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
  if (yearToTest % 400 === 0) {
    return true;
  }
  if (yearToTest % 100 === 0) {
    return false;
  }
  if (yearToTest % 4 === 0) {
    return true;
  }
  return false;
};

function countingSundays(firstYear, lastYear) {
  let totalSundays = 0;
  const d = new Date(`January 1, ${firstYear}`);
  let dayofWeek = d.getDay(); // The getDay() method returns the day of the week (0 to 6) of a date. Sunday = 0, Monday = 1, etc.

  let currDay = 1;
  let currMonth = 1; // 1 === Jan, etc.
  let currYear = firstYear;

  while (currYear < lastYear + 1) {
    if (dayofWeek === 0 && currDay === 1) {
      totalSundays++;
    }
    if (currMonth === 12 && currDay === 31) {
      currDay = 0; // set to zero instead of 1 (which would make more sense) because it will be incremented by next if clause since it's the last day of the month. Saves an extra nesting layer
      currMonth = 1;
      currYear++;
    }
    if (currDay >= monthsLookupTable[currMonth]) {
      if (currMonth === 2 && isLeapYear(currYear) && currDay === 28) {
        currDay++;
      } else {
        currDay = 1;
        currMonth++;
      }
    } else {
      currDay++;
    }
    if (dayofWeek === 6) {
      dayofWeek = 0;
    } else {
      dayofWeek++;
    }
  }
  return totalSundays;
}

console.log(countingSundays(1943, 1946));
