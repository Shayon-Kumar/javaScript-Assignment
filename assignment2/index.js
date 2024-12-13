// Function to calculate the difference between two arguments
function calculateDifference(a, b) {
  return a - b;
}
console.log('Difference:', calculateDifference(10, 5)); // Output: 5

// Function to check if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log('Is Odd:', isOdd(7)); // Output: true
console.log('Is Odd:', isOdd(4)); // Output: false

// Function to find the smallest number in an array
function findMin(arr) {
  return Math.min(...arr);
}
console.log('Minimum Number:', findMin([3, 1, 4, 1, 5, 9])); // Output: 1

// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log('Even Numbers:', filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Function to sort an array in descending order
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}
console.log(
  'Sorted Array Descending:',
  sortArrayDescending([3, 1, 4, 1, 5, 9])
); // Output: [9, 5, 4, 3, 1, 1]

// Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
  if (!str) return str; // Handle empty strings
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log('Lowercased First Letter:', lowercaseFirstLetter('Hello World')); // Output: "hello World"

// Function to find the average of an array of numbers
function findAverage(arr) {
  if (arr.length === 0) return 0; // Handle empty array
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log('Average:', findAverage([1, 2, 3, 4, 5])); // Output: 3

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log('Is Leap Year:', isLeapYear(2024)); // Output: true
console.log('Is Leap Year:', isLeapYear(2023)); // Output: false
