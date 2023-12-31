//1. what is a promise in javascript?

// a promise in javascript, is an object that represent an operation that is not yet done executing.
// when an operation is currently being producer code, the producer code gives the consumer code a promise as somekind of assurence that data will be availble soon. and that's what we call a promise in javascript

// the producer part: this is the part in our code that returns a promise
// the consumer part: this is the part in our code that uses the promise while waiting for the data

// how to create a promise?
/**
 * we create a promise by using the Promise() constructor and the new Keyword
 */ 

const promise = new Promise()
// inside the Promise() constructor, we pass in an executor function as an argument which also takes in two callbacks, resolve and reject.

const promisy = new Promise(function(resolve, rejec){
    resolve()
});

// a promise can be of 3 states:
/**
 * Pending
 * Resolves
 * Rejected
 */

// a promise which has ended, either resolved or rejected can either be called as fulfilled or settled.

// why promises???
/**
 * Promises were introduced in JS by the time when developers were using callbacks to perform asynchronous operations and in this time it was hard for them to perform many tasks that were related and also they could find themselves trapped in the so called callback hell or the pyramid of DOOMand thi is why promises came
 * 
 * Promises makes executing tasks that are related and also they give us the flexibility when it comes to writting and reading promise codes
 */