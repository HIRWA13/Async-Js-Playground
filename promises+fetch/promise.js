// function getWeather() {
//     return new Promise((resolve, reject) => {
//         resolve('sunny')
//     })
// }
// const promise = getWeather();
// promise.then(function(data){
//     console.log(data)
// })

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
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was rejected`))
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