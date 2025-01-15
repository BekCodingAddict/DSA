function fibonacci(n) {
  if (n < 2) return n;
  return fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
}
function fibonacciMemo(n, cache = {}) {
  if (n < 2) return n;
  if (n in cache) return cache[n];
  cache[n] = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
  return cache[n];
}

function fiboMaster() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
const fasterFib = fiboMaster();
console.log("cal " + calculation);
console.log("Fibbonaci:" + fibonacci(30));
console.log("Memo:" + fibonacciMemo(30));
console.log("FAster" + fasterFib(30));
