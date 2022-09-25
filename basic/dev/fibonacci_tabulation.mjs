function fibonacci2(n, memo) {
  if (memo === undefined) memo = {};
  if (n == 0 || n == 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
}

function fibonacci3(n) {
  if (n <= 1) return n;

  let table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  return table[n];
}

console.time(`fibonacci2 함수 실행시간`);
console.log(fibonacci2(40));
console.timeEnd(`fibonacci2 함수 실행시간`);

console.time(`fibonacci3 함수 실행시간`);
console.log(fibonacci3(40));
console.timeEnd(`fibonacci3 함수 실행시간`);
