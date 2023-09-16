// 1. create a promise that resolves with a message:

function promisifyResolve() {
    return new Promise((resolve, reject)=> {
        resolve("am I resolved promise")
    })
}

promisifyResolve()
    .then((value)=> {
        console.log(value)
    })

// 2. create a promise that rejects with an error message: 

function promisifyReject() {
    return new Promise((resolve, reject) => {
        reject("am I a rejected promise")
    })
}

promisifyReject()
    .catch((err) => {
        console.log(err)
    })


// 3. create a promise that resolves after a specific timeout

function promisfifyTimeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(`am a Promise that resolved after ${time} seconds`) 
        }, time * 1000);
    })
}

promisfifyTimeout(5) // will reject after 5 seonds
    .then((val) => {
        console.log(val)
    })


// 4. create a chain of promise using the then method:

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am")
    }, 1000);
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve("Junior")
       }, 1000);
    })
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hirwa")
        }, 1000);
    })
}).then((result) => {
    console.log(result)
})