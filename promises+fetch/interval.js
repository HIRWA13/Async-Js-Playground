let counter = 0

let interval = setInterval(() => {
    console.log("am asynchronous function");
    counter += 1;

    if(counter === 5) {
        clearInterval(interval)
    }
}, 1000);