// Chunk problem divide the given array into chunks of given size

function returnChunks(array, chunkSize) {
  chunked = [];
  index = 0;
  while (index < array.length - chunkSize) {
    chunks = array.splice(index, index + chunkSize);
    index += chunkSize;
    console.log(chunks);
    chunked.push(chunks);
  }
  return chunked;
}
console.log(returnChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3));

// two sum : problem statement is to return indexes of a pair  (2 values in an array) of items from an array whose sum equals to a given number
// assumiton only one valid answer will be there

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "result not found";
}

numArray = [1, 2, 3, 4, 6, 7, 8, 9, 0];
targetValue = 6;
twoSumResult = twoSum(numArray, targetValue);
console.log(twoSumResult);
