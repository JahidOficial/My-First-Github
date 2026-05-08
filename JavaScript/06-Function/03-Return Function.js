function tenTimes(number) {
    const result = number * 10;
    return result;
}

const ten_times = tenTimes(5); // 50
console.log('The Ten times is: ', ten_times); // 50

function add(a, b) {
    const result = a + b;
    return result;
}

const sum = add(6, 5); // 11
console.log('The sum is: ', sum); // 11



// Example: Check if a number is even or odd
function isEven(number) {
    const result = number % 2 === 0;
    return result;
}

const isNumber1 = 5;
const isNumber2 = 11;

const is_even_4 = isEven(isNumber1); // true
const is_even_3 = isEven(isNumber2); // false

console.log(`Is ${isNumber1} even? `, is_even_4); // true
console.log(`Is ${isNumber2} even? `, is_even_3); // false

