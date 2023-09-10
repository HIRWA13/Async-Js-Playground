// the Promise.All() method

/**
 * How it works:
 * 
 * -> it takes an iterable of promises and then returns a single promise.
 * -> this returned promise, fulfills when all input's  promises fulfills(including when an empty iterable is passed too) an array of fulfillment values
 * 
 * -> it rejects when any of the inputs' promises rejects with this first rejection reason.
 */

// syntax: Promise.All(iterable) 
// it's parameters: it takes any iterable as its parameter (eg: an array) -> eg: an array of promises

// it's return value:
/**
 * it returns a single promise that is fulfilled when:
 * - an empty iterable is passed
 * - all the iterable's promises are fulfilled, the fulfillment value is an array of the fulfillment values
 */

/**
 * it returns a single promise that is rejected when:
 * - any of the promise rejects, the rejection reason is the rejection reason of the first promise to be rejected
 */

// why and when do we need the Promise.All()?
/**
 * we will need to use this method if we have a bunch of related asynchronous tasks that we will need to fulfill first before 
 * we continue - or before our code continues.
 * 
 * Promise.All() waits for All fulfillments (or the first rejection)
 */


// examples: using the Promise.All()

// example-1:

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo")
    }, 2000);
});
const p4 = Promise.resolve(5);

Promise.all([p1, p2, p3, p4])
.then((values)=> {
    console.log(values);
})

.catch((err)=> {
    setTimeout(() => {
        console.log("REJECTED...")
    }, 1000);
})

// example-2: non-promise values
// if the iterable contains non-promise values, they will be ignored but still counted as fulfillment values when the returned promise is fulfilled.

const p = Promise.all([1, 2, 4]);
const p5 = Promise.all([0, 1, 3, Promise.resolve(444)]);
const p6 = Promise.all([5, 7, 9, Promise.reject(555)]).catch((err) => console.log("error"));

setTimeout(() => {
    console.log(p)
    console.log(p5)
    console.log(p6)
}, 1000);


// Example-3: passing in an array of already fulfilled or rejected promises:

const resolvedPromiseArray = [Promise.resolve(33), Promise.resolve(55)]
const p7 = Promise.all(resolvedPromiseArray);

// using setTimeout to execute P7 when the queue is empty
setTimeout(() => {
    console.log("the queue is empty now")
    console.log(p7)
}, 1000);


// Example 4: the same thing happen when you pass in an array that has a promise which was rejected

const mixedPromiseArray = [Promise.resolve(33), Promise.reject(55)]
const p8 = Promise.all(mixedPromiseArray).catch((err)=> console.log("This Promise has been rejected"));

// using setTimeout to execute P8 when the queue is empty
setTimeout(() => {
    console.log("the queue is empty now")
    console.log(p8)
}, 2000);