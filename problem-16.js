function powerDigitSum(exponent) {
  let bigNum = 2n ** BigInt(exponent);
  let bigNumArr = bigNum.toString().split("");
  return bigNumArr.reduce((accumulator, current) => {
    return accumulator + current * 1;
  }, 0);
}

console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));
