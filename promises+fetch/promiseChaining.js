// function promisify(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve();
//         }, 2000)
//     })
// }

// const promise = promisify();

// promise
//     .then(()=> console.log("first"))
//     .then(()=> console.log("second"))
//     .catch(()=> console.log("first error"))
//     .then(()=> console.log("third"))
//     .catch(()=> console.log("an error occured"))


// function chained (){
//     return new Promise((resolve, reject) => {
//         resolve(1)
//     })
// }

// let prom = chained();

// prom
//     .then((val) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(val)
//                 resolve();
//                 return val + 2;
//             }, 2000);
//         })
//     })
//     .then((val) => {
//         console.log(val)
//     })

// 




const job1 = () => {
    return new Promise((resolve, reject) => {
        resolve("results of Job 1")
    });
}

const job2 = () => {
    return new Promise((resolve, reject)=> {
        resolve("results of job 2")
    });
}

const promise = job1();

promise
    .then((data1) => {
        console.log("data 1: " + data1)
        return job2();
    })
    .then((data2) => {
        console.log("data 2: " + data2)
        return "Hello world";
    })
    .then((data3) => {
        console.log("data 3: " + data3)
    })