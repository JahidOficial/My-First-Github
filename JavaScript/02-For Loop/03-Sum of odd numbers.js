/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
*/


/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/



// Subtask-1
let sum = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        console.log(i);
        sum += i;
    }
}
console.log("Sum of all the odd numbers from 91 to 129:", sum);



// Subtask-2
let sum2 = 0;
for(let j = 51; j <= 85; j++){
    if(j % 2 == 0){
        console.log(j);
        sum2 += j;
    }
}
console.log("Sum of all the even numbers from 51 to 85:", sum2);