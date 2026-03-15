/***
Subtask-1:
Find all the odd numbers from 61 to 100.
*/

/***
Subtask-2:
Find all the even numbers from 78 to 98.
*/


// Subtask-1
console.log("Odd numbers from 61 to 100:");
let num1 = 61;

while (num1 <= 100) {
    if (num1 % 2 !== 0) {
        console.log(num1);
    }
    num1++;
    // another way to find odd numbers
    // console.log(num1);
    // num1 += 2;
}




// Subtask-2
console.log("Even numbers from 78 to 98:");
let num2 = 78;

while (num2 <= 98) {
    if (num2 % 2 == 0){
        console.log(num2);
    }
    num2++;
    // another way to find even numbers
    // console.log(num2);
    // num2 += 2;
}