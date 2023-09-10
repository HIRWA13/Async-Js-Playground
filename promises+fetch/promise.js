// 

const stock = {
    floar: ["strawberry", "lemon"],
    liquid: ["water", "juice"],
    fruits: ["mango", "banana", "pineapple"],
    container: ["glass", "bottle"],
    maker: ["Brender"]
}

const is_stock_open = true

const makeJuice = () => {
    return new Promise((resolve, reject)=> {
        if(is_stock_open) {
            resolve(console.log("Woooh the shop is opened"));
        } else {
            reject(console.log("Oops! stock closed"))   
        }
    })
}

makeJuice()
.then(()=> {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("start taking orders")
        }, 1000);
      })
    })

.then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("gather materials")
        }, 2000);
       })
    })
.then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`cut ${stock.fruits[0]}, ${stock.fruits[1]} and ${stock.fruits[2]}`)
        }, 5000);
       })
    })
.then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`put the fruits in ${stock.maker[0]}`)
        }, 2000);
       })
    })
    // .then(()=>{
    //     setTimeout(() => {
    //         console.log(`add the ${stock.floar[0]} and ${stock.floar[1]} floars`)
    //     }, 1000);
    // })
    // .then(()=> {
    //     setTimeout(() => {
    //         console.log(`add ${stock.liquid[0]}`)
    //     }, 3000);
    // })
    // .then(()=> {
    //     setTimeout(() => {
    //         console.log("turn on the Brender")
    //     }, 1000);
    // })
    // .then(()=>{
    //     setTimeout(() => {
    //         console.log("wait for the Brender to finish the mixing")
    //     }, 3000);
    // })
    // .then(()=>{
    //     setTimeout(() => {
    //         console.log(`put the juice in the ${stock.container[0]}`)
    //     }, 2000);
    // })
    // .then(()=>{
    //     setTimeout(() => {
    //         console.log("serve the juice")
    //     }, 3000);
    // })
    .catch(()=> {
        console.log("error")
    })