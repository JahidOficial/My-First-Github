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
for(let i = 61; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// Another Way -> Odd Number
console.log("Another way -> Odd numbers from 61 to 100:");
for(let j = 61; j <= 100; j += 2){
    console.log(j);
}

// Subtask-2
console.log("Even numbers from 78 to 98:");
for(let k = 78; k <= 98; k++){
    if(k % 2 === 0){
        console.log(k);
    }
}

// Another Way -> Even Number
console.log("Another way -> Even numbers from 78 to 98:");
for(let l = 78; l <= 98; l += 2){
    console.log(l);
}