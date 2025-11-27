const { mergeSort } = require("./mergesort.js");

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const result = mergeSort(unsortedArray);

console.log("Sorted Array:", result.arr);
console.log("Total Iterations:", result.iterations);
console.log("Is Sorted:", result.sorted);
