const stock = {
    floar: ["strawberry", "lemon"],
    liquid: ["water", "juice"],
    fruits: ["mango", "banana", "pineapple"],
    container: ["glass", "bottle"],
    maker: ["Brender"]
}

const is_stock_open = false

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
            resolve(console.log("start taking orders"))
        }, 1000);
      })
    })

    .then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("gather materials"))
        }, 2000);
       })
    })
    .then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`cut ${stock.fruits[0]}, ${stock.fruits[1]} and ${stock.fruits[2]}`))
        }, 5000);
       })
    })
    .then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`put the fruits in ${stock.maker[0]}`))
        }, 2000);
       })
    })
    .then(()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log(`add the ${stock.floar[0]} and ${stock.floar[1]} floars`))
            }, 1000);
        })
    })
    .then(()=> {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`add ${stock.liquid[0]}`))
        }, 3000);
       })
    })
    .then(()=> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve( console.log("turn on the Brender"))
        }, 1000);
      })
    })
    .then(()=>{
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("wait for the Brender to finish the mixing"))
        }, 3000);
       })
    })
    .then(()=>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`put the juice in the ${stock.container[0]}`))
        }, 2000);
      })
    })
    .then(()=>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("serve the juice - Enjoy"))
        }, 3000);
      })
    })

    .catch(()=> {
        console.log("SORRY! We are closed")
    })
    .finally(()=> {
        console.log("Done")
    })