function maxMinarray(unsortedarray) {
  sortedArray = unsortedarray.sort((a, b) => a - b);
  console.log(sortedArray);
  returnedArray = [];

  while (sortedArray.length > 0) {
    maxvalue = sortedArray.pop();
    returnedArray.push(maxvalue);
    minvalue = sortedArray.shift();
    returnedArray.push(minvalue);
  }
  return returnedArray;
}

console.log(maxMinarray([5, 2, 7, 8, -2, 25, 25]));
