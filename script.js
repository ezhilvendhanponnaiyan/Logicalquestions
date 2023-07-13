/*1. Write a function isArmstrongNumber(n) that takes a positive integer n as input and
returns true if n is an Armstrong number, and false otherwise. An Armstrong number is a
number that is equal to the sum of its own digits each raised to the power of the number
of digits.
Example:
isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)
2. Write a function sortByLength(arr) that takes an array of strings as input and returns a
new array with the strings sorted by their lengths in ascending order.
Example:
isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)
sortByLength([&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;, &quot;date&quot;]); // [&quot;date&quot;, &quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;]
3. Write a function sumDigits(n) that takes a positive integer n as input and returns the sum
of its digits.
Example:
sumDigits(456); // 15 (4 + 5 + 6 = 15)
4. Write a function capitalizeLastLetters(str) that takes a string as input and returns a new
string where the last letter of each word is capitalized, and all other letters are in
lowercase.
Example:
capitalizeLastLetters(&quot;javascript is AWESOME&quot;); // &quot;javascripT iS AWESOMe&quot;
5. Write a function findLargestNumber(arr) that takes an array of numbers as input and
returns the largest number in the array.
Example:
findLargestNumber([1, 5, 3, 9, 2]); // 9
6. Write JavaScript code that dynamically fetches data from an API and updates the content
of a specific HTML element with the retrieved data.
7. Create a form validation script using JavaScript and the DOM. The script should validate
the input fields before submitting the form and display error messages for invalid fields.
8. Implement a function that allows users to drag and drop HTML elements within a web
page using JavaScript and the DOM.
9. Write a script that dynamically loads external content (such as HTML, CSS, or
JavaScript files) into a webpage based on user interactions, using JavaScript and the
DOM.

10. Implement a function that creates a modal window (popup) with customizable content
and controls to close the modal, using JavaScript and the DOM.*/

// Answer

//  1. Write a function isArmstrongNumber(n) that takes a positive integer n as input and
// returns true if n is an Armstrong number, and false otherwise. An Armstrong number is a
// number that is equal to the sum of its own digits each raised to the power of the number
// of digits.
// Example:
// isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)

function ArmstrongNumber(n) {
  const numStr = String(n);
  const numDigits = numStr.length;

  let armstrongSum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = Number(numStr[i]);
    armstrongSum += Math.pow(digit, numDigits);
  }

  return armstrongSum === n;
}

console.log(ArmstrongNumber(123)); // false

// 2. Write a function sortByLength(arr) that takes an array of strings as input and returns a
// new array with the strings sorted by their lengths in ascending order.
// Example:
// isArmstrongNumber(123); // false (1^3 + 2^3 + 3^3 = 36, not equal to 123)
// sortByLength([&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;, &quot;date&quot;]); // [&quot;date&quot;, &quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;]

function sortByLength(arr) {
  arr.sort((a, b) => a.length - b.length);

  return arr;
}

var strings = ['apple', 'banana', 'cherry', 'date'];

var sortedStrings = sortByLength(strings);

console.log(sortedStrings);

// 3. Write a function sumDigits(n) that takes a positive integer n as input and returns the sum
// of its digits.
// Example:
// sumDigits(456); // 15 (4 + 5 + 6 = 15)

function sumDigits(number) {
  let numberToArray = String(number).split('');
  for (let i = 0; i <= number.length; i++) {}
}

// 4. Write a function capitalizeLastLetters(str) that takes a string as input and returns a new
// string where the last letter of each word is capitalized, and all other letters are in
// lowercase.
// Example:
// capitalizeLastLetters(&quot;javascript is AWESOME&quot;); // &quot;javascripT iS AWESOMe&quot;

// 5. Write a function findLargestNumber(arr) that takes an array of numbers as input and
// returns the largest number in the array.
// Example:
// findLargestNumber([1, 5, 3, 9, 2]); // 9

function findLargestNumber(arr) {
  if (arr.length === 0) {
    return;
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
let numbers = [1, 5, 3, 9, 2];
let largestNumber = findLargestNumber(numbers);
console.log(largestNumber);
