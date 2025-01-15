function addTo80() {
  const cache = {};
  return function memoizedAddTo80(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Long time running");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = addTo80();
console.log(memoized(6));
console.log(memoized(7));
console.log(memoized(6));
