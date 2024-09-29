"use-strict";

// constant time complexity- O(1)
let someArray = [1, 2, 3, 4, 5, 6];
function fetchElementOnIndex(array, index) {
  return array[index];
}
let firstElement = fetchElementOnIndex(someArray, 0);
let secondElement = fetchElementOnIndex(someArray, 1);
let lastElement = fetchElementOnIndex(someArray, someArray.length - 1);
let seccondLastElement = fetchElementOnIndex(someArray, someArray.length - 2);
// here no matter how big the array is it will always take same time as we are fetching first element from array.

// linear time complexity- O(n)
let fruits = ["apples", "bananas", "grapes", "kiwi", "mango"];
let findFruit = (array, fruitToFind) => {
  for (i of array) {
    if (i === fruitToFind) return true;
  }
  return false;
};
findFruit(fruits, "pineapple"); // false but it had to go through whole list to come to conclusion. and if list was bigger then it would have taken even more time

// quadratic time complexity- O(n^2)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let findTotalPair = function (array, sumValue) {
  for (i = 0; i < array.length; i++) {
    // n times
    for (j = i; j < array.length; j++) {
      // n-1 times
      if (array[i] + array[j] === sumValue) {
        console.log(
          "these two pairs return return required sum",
          array[i],
          array[j]
        );
      }
    }
  }
};
