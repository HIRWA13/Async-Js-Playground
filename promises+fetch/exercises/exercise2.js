// exercise 2

/**
 * log "program started" at the beginning of your program
 * create a promise that resolves after three second and reject after two seconds
 * log the pending promise
 * log "Program in Progress.."
 * log "program completed" when fulfilled
 * log "program failure" when rejected
 */

console.log("Program Has started...")
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program Completed");
    }, 3000);
})

console.log(myPromise);
console.log("Program in Progress...")

myPromise
    .then((value) => console.log(value))
    .then(() => {
        setTimeout(() => {
            const second = Promise.reject(404);
            second.catch((err) => {
                console.log("Program failed with and error of", err)
            })
        }, 2000);
        
    })
