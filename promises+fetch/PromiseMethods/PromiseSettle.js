// Promise.allSettled();

/**
 * this is a static method that takes in an iterable of promises and then
 * returns a single promise.
 * 
 * this promise fulfills when all of the input's promises settle(including when an empty iterable is passed)
 * 
 * the returned promise is an array of objects that describe the outcome 
 * of each promise.
 */

// an example:

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("foo")
    }, 1000);
})

const promises = [promise1, promise2];

Promise.allSettled(promises).then((results)=> {
    results.forEach((result)=> {
        console.log(result.status)
    })
})

// returns: 
// fulfilled
// rejected

/**
 * the Promise.allSettled() method is one of the promise concurrency methods.
 * it is typically used when you have multiple asynchronous tasks that are not dependent on each other to complete successfully, 
 * or you'd always like to know the result of each promise.
 */