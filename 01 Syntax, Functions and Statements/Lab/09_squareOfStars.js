function squareOfStars(num = 5) {
  const symbol ='*';
  for (let i = 1; i <= num; i++) {
    console.log((symbol + ' ').repeat(num).trimRight())
  }
}


