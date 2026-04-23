const address = "andorkilla";

const part = address.slice(2, 5); // slice
console.log(part);

const sentence = "I am a good and hardworking person.";
console.log(sentence.split(' ')); // split

console.log(sentence.split('a')); // split by 'a'

const frindsStr = 'Rahim, kahim, Karim, Rahim';
const frinds = frindsStr.split(', '); // split by ', '
console.log(frinds);

const message = ['I', 'am', 'a', 'good', 'and', 'hardworking', 'person.'];
const newSentence = message.join(' - '); // join
// const anotherSentence = message.join(' | '); // join |
console.log(newSentence);

 
// concat
const first = 'I am';
const second = ' Jahid.';
const fullSentence = first.concat(second); // using concat method for concatenation
console.log(fullSentence);
const fullName = first + ' ' + second; // using + operator for concatenation
console.log(fullName);


// includes
console.log(second.includes('d')); // true