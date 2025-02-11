function reverseArray(arr, n = arr.length - 1, reversed = []) {
  if (n < 0) {
    return reversed;
  }
  reversed.push(arr[n]);
  return reverseArray(arr, n - 1, reversed);
}

let res = reverseArray([1, 2, 3, 4, 5]);
console.log(res);
