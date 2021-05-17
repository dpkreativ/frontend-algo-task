const convertFahrToCelsius = (F) => {
  let numberF = Number(F);
  if (isNaN(numberF) === true) {
    return `${JSON.stringify(F)} is not a valid number, but a ${typeof F}`;
  } else {
    let C = ((numberF - 32) * (5 / 9)).toFixed(4);
    return C;
  }
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
console.log(convertFahrToCelsius("0px"));
