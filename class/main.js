function fibs(n, memo={}) {
  if ( n===1 || n === 2) return 1;
  if(memo[n]) return memo[n];
  memo[n] = fibs(n - 1, memo) + fibs(n - 2, memo)
  return memo[n]
}

console.log(fibs(90))