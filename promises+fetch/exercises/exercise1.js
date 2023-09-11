/**
  Exercises1:

  1. print out "Program Started" at the start of your code
  2. create a promise thar resolves after 3 seconds 
  3. log out the promise while it's pending
  4. print out "Program in progress..."
  5. print out "Program complete" when the promise completes after 3 seconds

  HINT: Use setTimeout for delay
 */3

console.log("Program Started")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The Program Completed...")
    }, 4000);
});

console.log(myPromise);
console.log("Program in Programing...")

myPromise.then((value) => {
    console.log(value)
})