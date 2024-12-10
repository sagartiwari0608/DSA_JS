function maxXor(a, b, k) {
  maxValue = 0;
  for (i = a; i <= b; i++) {
    for (j = i + 1; j <= b; j++) {
      xored = i ^ j;
      if (xored <= k) {
        maxValue = xored > maxValue ? xored : maxvalue;
      }
    }
  }
  return maxValue;
}

console.log(maxXor(2, 4, 8));
