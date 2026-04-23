const persons = ['John', 'Sara', 'Adam', 'Zoe', 'Charlie', 'Bob', 'David', 'Eve', 'Frank', 'Grace'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// sort ->>
const numbers = [5, 2, 96, 14, 8, 6];
console.log(numbers.sort());  


// Ascending order --->> Smaller to larger: [2, 5, 6, 8, 9]
const ascnumbers = numbers.sort((a, b) => a - b);
console.log('Ascending: ', ascnumbers);


// Descending order --->> Larger to smaller: [9, 8, 6, 5, 2]
const descnumbers = numbers.sort((a, b) => b - a);
console.log('Descending: ', descnumbers);