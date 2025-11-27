// merge.js
function merge(arr, startA, endA, startB, endB) {
  let merged = [];
  let i = startA; // Pointer for array A
  let j = startB; // Pointer for array B
  let iterations = 0;

  while (i <= endA && j <= endB) {
    iterations++;
    if (arr[i] <= arr[j]) {
      merged.push(arr[i]);
      i++;
    } else {
      merged.push(arr[j]);
      j++;
    }
  }

  // Kopier de resterende elementer fra A
  while (i <= endA) {
    iterations++;
    merged.push(arr[i]);
    i++;
  }

  // Kopier de resterende elementer fra B
  while (j <= endB) {
    iterations++;
    merged.push(arr[j]);
    j++;
  }

  console.group("Merging");
  console.log(`Merged Array: ${merged}`);
  console.groupEnd();

  return { merged, iterations };
}
