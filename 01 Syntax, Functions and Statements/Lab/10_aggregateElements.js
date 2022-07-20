function solve(arr) {
  let sum = arr.reduce((a, b) => Number(a) + Number(b));
  let sumInverseValues = arr.reduce((a, b) => Number(a) + 1 / Number(b), 0);
  let combinedStr = arr.join('');

  console.log(sum);
  console.log(sumInverseValues);
  console.log(combinedStr);
  
}

