function power(x, n) {
  // 2^0 = 1
  if (n == 0) return 1;
  return power(x, n - 1) * x;
}

// 2^5
console.log(power(2, 5));
