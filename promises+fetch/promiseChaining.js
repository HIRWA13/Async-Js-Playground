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

const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple",],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject)=>{
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject(console.log("our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=> {
    return order(0, ()=> console.log("production has started"))
})

.then(()=> {
    return order(2000, ()=> console.log(`the fruits has been chopped`))
})

.then(()=> {
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})

.then(()=> {
    return order(1000, ()=> console.log(`start the machine`))
})

.then(()=> {
    return order(2000, ()=> console.log(`Icecream placed on the ${stocks.holder[0]}`))
})

.then(()=> {
    return order(3000, ()=> console.log(`${stocks.toppings[0]} was selected`))
})

.then(()=> {
    return order(2000, ()=> console.log("Icecream served"))
})

.catch(()=> {
   setTimeout(() => {
    console.log("yallaaah the customer left")
   }, 2000);
})

.finally(()=> {
    setTimeout(() => {
        console.log("the shop closed")
    }, 6000);
})