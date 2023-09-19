/**
 * Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped.
 */


const cb = () => {
    console.log('hi there')
}

const repeatEvery = (cb, time) => {
    let count = 0;
    const intervalID = null;

    

    if(count > 3) {
        clearInterval(intervalID)
    }
}

repeatEvery(cb, 1)