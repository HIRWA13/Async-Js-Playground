// promise chaining comes in hand when we have a sequence of asynchronous tasks to be performed one after another, an example you can take is maybe loaing scripts

// promise chaining helps us to handle tasks that relate to another like where the result will depend to the previous data.

// an example of promice chain:

// new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1)
//     }, 1000);
// }).then((result) => {
//    setTimeout(() => {
//     console.log(result)
//    }, 2000);
//    return result + 1
// }).then((result) => {
//     setTimeout(() => {
//           console.log(result)
//     }, 3000);
//     return result + 1
// }).then((result) => {
//         setTimeout(() => {
//             console.log(result)
//         }, 4000);
//         return result + 1
// }).then((result) => {
//     setTimeout(() => {
//         console.log(result)
//     }, 5000);
//     return result + 1
// })




//the call to every then() returns a promise and when we chain two or more then() methods the promise will be passed from the first then tuntil the second, the third and at the end we will get on single result

// the then() also takes a handler function and that handler function also can return a promise. in this case, the next thens will wait for that promise of the handler to resolve for them also to be resolved.


new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 1000);
}).then((result) => {
    console.log(result)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(result + 1)
        }, 1000);
    })
}).then((result) => {
    console.log(result)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(result + 1)
        }, 1000);
    })
}).then((result) => {
    console.log(result)
})
