function strlen(a, b, c) {
  let len1 = a.length;
  let len2 = b.length;
  let len3 = c.length;
  let allStr = len1 + len2 + len3;
  let avg = Math.floor(allStr / 3);
  console.log(allStr);
  console.log(avg);
}
