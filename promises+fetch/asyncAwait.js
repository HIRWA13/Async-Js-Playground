const stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple",],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve,reject) => {
//         if(true){
//             resolve();
//         } else {
//             reject();
//         }
//     })
// }

async function order(){
    try{
        await abc
    }
    catch(err) {
        console.log("abc function does not exist", err)
    }
    finally{
        console.log("runs code anyways")
    }
}

order();