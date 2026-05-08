/** Objective: Write a function to give me the sum of all the numbers in an array.
* step-1: declare a function
* step-2: call check whether the function is called properly
* step-3: set a parameter (s)
* step-4: pas the parameter (s), check whether parameter is passed in a proper format
* step-5: do the function tasks (step by step)
*/


function sumOfArray(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}


const nums = [12, 20, 13, 46, 5];
const sum = sumOfArray(nums);
console.log('Sum of numbers is', sum);
