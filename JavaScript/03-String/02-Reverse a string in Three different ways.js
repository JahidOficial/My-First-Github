const sentence = "I am learing web Dev.";

// first way
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}
// console.log(reverse);


// second way
let reverse2 = '';
for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    reverse2 = letter + reverse2;
}
// console.log(reverse2);


// third way
const reverse3 = sentence.split('').reverse().join('');
console.log(reverse3);