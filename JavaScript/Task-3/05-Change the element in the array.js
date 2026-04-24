const numbers = [1, 2, 3];

const copyOfNumbers = numbers.slice();
copyOfNumbers[0] = 10; // Change the first element of the copy
console.log(copyOfNumbers);


// second example
const n = [1, 2, 3];
const z = n;
z[0] = 10; // Change the first element of z
console.log(n); // This will also change the first element of n, because z and n reference the same array