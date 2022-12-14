function fibonacci1(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
}

function fibonacci2(n, memo) {
  if (memo === undefined) memo = {};
  if (n == 0 || n == 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
}

console.time(`fibonacci1 함수 실행시간`);
console.log(fibonacci1(40));
console.timeEnd(`fibonacci1 함수 실행시간`);

console.time(`fibonacci2 함수 실행시간`);
console.log(fibonacci2(40));
console.timeEnd(`fibonacci2 함수 실행시간`);
