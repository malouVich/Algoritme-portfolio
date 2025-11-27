function binarySearchRecursive(
  search,
  values,
  start,
  end,
  iterations = 0,
  comparator
) {
  // Start en ny gruppe til debug output
  console.group(
    `binarySearchRecursive called with start: ${start}, end: ${end}, iterations: ${iterations}`
  );

  // Base case: når start overstiger end, betyder det, at værdien ikke blev fundet
  if (start > end) {
    console.groupEnd(); // Afslut debug gruppen
    return {
      found: false,
      index: -1,
      iterations: iterations + 1,
    };
  }

  // Beregn midtpunktet
  const mid = Math.floor((start + end) / 2);
  const midValue = values[mid];

  // Brug comparator hvis den er angivet, ellers sammenlign direkte
  let comparison;
  if (comparator) {
    comparison = comparator(search, midValue);
  } else {
    comparison = search < midValue ? -1 : search > midValue ? 1 : 0;
  }

  // Tjek om midtpunktet indeholder den ønskede værdi
  if (comparison === 0) {
    console.groupEnd(); // Afslut debug gruppen
    return {
      found: true,
      index: mid,
      iterations: iterations + 1,
    };
  }

  // Hvis værdien er mindre end midtpunktet, søg i venstre halvdel
  if (comparison < 0) {
    console.groupEnd(); // Afslut debug gruppen
    return binarySearchRecursive(
      search,
      values,
      start,
      mid - 1,
      iterations + 1,
      comparator
    );
  } else {
    // Hvis værdien er større end midtpunktet, søg i højre halvdel
    console.groupEnd(); // Afslut debug gruppen
    return binarySearchRecursive(
      search,
      values,
      mid + 1,
      end,
      iterations + 1,
      comparator
    );
  }
}

// Eksempel på brug
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = binarySearchRecursive(5, sortedArray, 0, sortedArray.length - 1);
console.log(result);
