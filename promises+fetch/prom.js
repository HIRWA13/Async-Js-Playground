const promiseA = new Promise((resolve, reject) => {
    resolve(777);
})

const promise = promiseA

promise.then((val)=> console.log("value is", val));
console.log("immediate logging")