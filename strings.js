// Reverse a string

reversedString = (str) => {
  return str.split("").reverse().join("");
};

let hello = "Hello";
console.log("reversed string", reversedString(hello));

// Palindrome

isPalindrome = (str) => reversedString(str) === palindromeString;

let palindromeString = "racecar";
console.log(palindromeString, "is palindrome?", isPalindrome(palindromeString));

// Reverse an Integer

function reverseNumber(numb) {
  return parseInt(reversedString(numb.toString())) * Math.sign(numb); // numb.toString().split('').reverse().join('');
}

console.log("reversed Int", reverseNumber(12345));
console.log("reversed signed Int", reverseNumber(-12345));

// Sentence Capitalisation

function sentenceCapitalisation(givenSentence) {
  return givenSentence
    .toLowerCase()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

let givenSentence = "hey there you bitch";
console.log(sentenceCapitalisation(givenSentence));

// Fizz Buzz

function printFizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

printFizzBuzz(20);

// MaxProfit

let array = [7, 4, 3, 5, 18, 2];
let min = array[0];
let max = array[1];
let profit = 0;
function MaxProfit(array) {
  for (let i = 1; i < array.length; i++) {
    const currentprice = array[i];
    min = Math.min(currentprice, min);
    // const potentialProfit = currentprice - min;
    profit = Math.max(currentprice - min, profit);
  }
  return profit;
}
console.log(MaxProfit(array));
