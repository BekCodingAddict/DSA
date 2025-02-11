function findMax(arr, n = arr.length) {
  if (n === 1) return arr[0];

  let maxOfRest = findMax(arr, n - 1);
  return Math.max(arr[n - 1], maxOfRest);
}

function findMin(arr, n = arr.length) {
  if (n === 1) return arr[0];

  let minOfRest = findMin(arr, n - 1);

  return Math.min(arr[n - 1], minOfRest);
}
