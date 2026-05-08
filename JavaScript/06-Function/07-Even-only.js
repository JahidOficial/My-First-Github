/** 
 * create a function that will return only the even numbers
 * return the sum of even numbers
 */

// Example - 1
function evenNumbersOnly(numbers) {
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
    console.log("\n");
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbersOnly(arr);


// example 2

function evenNumbersOnly2(even) {
    let evensNum = [];
    let sum = 0;
    for (const number of even) {
        if (number % 2 === 0) {
            evensNum.push(number);
            sum += number;
        }
    }
    return [evensNum, sum];
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [evenNumbers, sum] = evenNumbersOnly2(arr2);
console.log(evenNumbers);
console.log(sum);