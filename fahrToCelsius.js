const convertFahrToCelsius = (F) => {
  let numberF = Number(F);
  if (isNaN(numberF) === true) {
    let dataType = () => {
      if (F.constructor === [].constructor) {
        return "array";
      } else if (F.constructor === {}.constructor) {
        return "object";
      } else {
        return typeof F;
      }
    };

    return `${JSON.stringify(F)} is not a valid number, but a/an ${dataType()}`;
  } else {
    let C = ((numberF - 32) * (5 / 9)).toFixed(4);
    return C;
  }
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
console.log(convertFahrToCelsius("0px"));
