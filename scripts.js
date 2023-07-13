function sumDigits(number) {
  let numberToArray = String(number).split('');
  let outPut = 0;
  let a = numberToArray.map((item, index) => {
    let outPutFinal = Number[numberToArray[index]] + outPut;
    return outPutFinal;
  });
  return a;
}

console.log(sumDigits(555));
