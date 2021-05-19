const checkYuGiOh = (n) => {
  let numberN = Number(n);
  if (isNaN(numberN) === true) {
    return `invalid parameter: ${JSON.stringify(n)}`;
  } else {
    let numberArray = [],
      i;
    for (i = 1; i <= numberN; i++) {
      if (
        Number.isInteger(i / 2) === true &&
        Number.isInteger(i / 3) === true &&
        Number.isInteger(i / 5) === true
      ) {
        numberArray.push("yu-gi-oh");
      } else if (
        Number.isInteger(i / 2) === true &&
        Number.isInteger(i / 3) === true &&
        Number.isInteger(i / 5) === false
      ) {
        numberArray.push("yu-gi");
      } else if (
        Number.isInteger(i / 2) === true &&
        Number.isInteger(i / 3) === false &&
        Number.isInteger(i / 5) === true
      ) {
        numberArray.push("yu-oh");
      } else if (
        Number.isInteger(i / 2) === false &&
        Number.isInteger(i / 3) === true &&
        Number.isInteger(i / 5) === true
      ) {
        numberArray.push("gi-oh");
      } else if (
        Number.isInteger(i / 2) === true &&
        Number.isInteger(i / 3) === false &&
        Number.isInteger(i / 5) === false
      ) {
        numberArray.push("yu");
      } else if (
        Number.isInteger(i / 2) === false &&
        Number.isInteger(i / 3) === true &&
        Number.isInteger(i / 5) === false
      ) {
        numberArray.push("gi");
      } else if (
        Number.isInteger(i / 2) === false &&
        Number.isInteger(i / 3) === false &&
        Number.isInteger(i / 5) === true
      ) {
        numberArray.push("oh");
      } else {
        numberArray.push(i);
      }
    }
    return numberArray;
  }
};

console.log(checkYuGiOh(5));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(`fizzbuzz is meh`));
