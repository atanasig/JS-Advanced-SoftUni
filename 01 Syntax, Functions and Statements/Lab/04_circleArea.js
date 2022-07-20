function circleArea(input) {
  const pi = Math.PI;
  let area;
  if (typeof input == "number") {
    area = pi * input ** 2;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}


