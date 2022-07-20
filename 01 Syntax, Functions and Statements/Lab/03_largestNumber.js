function maxNum(a, b, c) {
  console.log(`The largest number is ${Math.max(a, b, c)}.`);
}

//or with Lambda Expression
(...p) => `The largest number is ${Math.max(...p)}.`;