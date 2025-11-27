// mergesort.js
let totalIterations = 0;

function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return { arr: [arr[start]], iterations: 0, sorted: true };
  }

  const mid = Math.floor((start + end) / 2);

  const leftResult = mergeSort(arr, start, mid);
  const rightResult = mergeSort(arr, mid + 1, end);

  totalIterations += leftResult.iterations + rightResult.iterations;

  const mergeResult = merge(arr, start, mid, mid + 1, end);
  totalIterations += mergeResult.iterations;

  return {
    arr: mergeResult.merged,
    iterations: totalIterations,
    sorted: true,
  };
}

module.exports = { mergeSort };
