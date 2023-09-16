// -> a callback function is a function that is passed into another function as an arguments.
// -> with callbacks functions are given the ability to call other functions.

// function makeSomething(value) {
//     value();
// }

// makeSomething(function() {
//     console.log("hello")
// })


// -> Javascript are executed in a sequence that they are called
function myDisplayer(name) {
    document.getElementById('title').innerHTML = name
}

function first(){
    myDisplayer("Hi John")
}

function second() {
    myDisplayer("Hey James")
}
first()
second()


// calculator function for addition using callbacks,

function displayResult(value) {
    console.log(`the result is ${value}`)
}

function myCalc(num1, num2) {
    let sum = num1 + num2

    return sum
}

const result = (myCalc(25, 10))
displayResult(result)

 // here the function displayResult() is calling the myCalc() function in order to get the returned value of myCalc
 
// we can also change the order and then let the myCalc function call the displayResult() function.

// consider the below functions:

function displayProduct(product) {
    console.log(`the product is ${product}`)
}

function calcProduct(num1, num2) {
    const product = num1 * num2
    displayProduct(product)
}

calcProduct(2, 5)

// the above functions all of them, for us to get the result, we just have to call two functions and that makes our codes more redundant and can be hard to read if we have too many lines of code.

// TIME TO BRING IN CALLBACKS:

// using a callback we can call a function with a callback and let the calculator function run the callback after the calculations has finished.

// example: 

function displaySum(value) {
    console.log(`the sum is ${value}`)
}

function calcSum(num1, num2, cb){
    const sum = num1 + num2
    cb(sum)
}

calcSum(10, 24, displaySum)
// displaySum is a callback function and is passed in the calcSum() as an argument.

// let's see how we can remove negative numbers from an array of numbers using functions:

const numbers = [4, 1, -20, -7, 5, 9, -6]

// function posNums (number) {
//     console.log(number >= 0)
// }

// function removeNeg(numbers, cb) {
//     const newArr = [];
//     for(const number of numbers) {
//         if(cb(number)) {
//             newArr.push(number)
//         }
//     }
//     console.log(newArr);
// }

// removeNeg(numbers, (x)=> x >= 0)


// let's immitate a function similar to the filter: 


// let's create a function that will be removing negative numbers from an array

const nums = [4, 1, -20, -7, 5, 9, -6];

function myFilter(nums, cb) {
    const newArr = [];
    for(const num of nums) {
        if(cb(num)){
            newArr.push(num)
        }
    }
    console.log(newArr)
}



// first filter takes an array of numbers and a callback function and returns a new  array that passes each condition

myFilter(nums, (x) => x >= 0)


// when to use callbacks??
/**
 * callbacks are mostly used to perform asynchronous tasks where a function has to wait for another function to execute
 */