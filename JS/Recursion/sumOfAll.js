function sumOfAll(arr, n = arr.length) {
  if (n === 0) return 0; // Base case: If no elements, sum is 0
  return arr[n - 1] + sumOfAll(arr, n - 1);
}

console.log(sumOfAll([1, 3, 2, 5, 4]));
