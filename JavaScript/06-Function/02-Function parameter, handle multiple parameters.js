function square(number) {
    console.log("Value of the number parameter", number);
    const borgo = number * number;
    console.log("Square of the given number is: ", borgo);
}

square(5);
square(15);



// Function with multiple parameters -> second example
function add(num1, num2) {
    console.log("Value of num1 parameter", num1);
    console.log("Value of num2 parameter", num2);
    const sum = num1 + num2;
    console.log("Sum of the given numbers is: ", sum);
}

add(10, 20);
add(100, 200);