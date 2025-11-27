// Insertion Sort implementation using shift method
export function insertionSort(arr) {
  let iterations = 0; // Initialize iteration counter

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // The value to be positioned
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j = j - 1;
      iterations++; // Count this as an iteration
    }
    arr[j + 1] = key; // Place the key in its correct position
    iterations++; // Count this as an iteration
  }

  // Return the result object
  return {
    arr: arr,
    iterations: iterations,
    sorted: true, // Since we are sorting the array
  };
}

// Test the function with a sample array
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
console.log(insertionSort(list)); // Call the function to test
