/**
 * create a function createAlarm for generating a wakeup message for a person
 * the function will accept two parameters, the name and delay time
 * the function will return a promise that resolves if the delay is greater than two seconds, else it  will reject.
 */

const createAlarm = (name, time) => {
    return new Promise((resolves, reject) => {
        setTimeout(() => {
            if(time > 2) {
                resolves(`Wake up ${name}`)
            } else {
                reject("delay time is insufficient")
            }
        }, time * 1000);
    })
}

const wakeMeUp = createAlarm("Penina", 2)

wakeMeUp
    .then((val)=> {
        console.log(val)
    })
    .catch((err) => {
        console.log(err)
    })