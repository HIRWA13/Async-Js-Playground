const message = document.createElement('h2')
const para = document.querySelector('.para')
const messageContainer = document.querySelector('.container');
const msg = "It is a waste of energy when we try to conform to a pattern. To conserve energy, we must be aware of how we dissipate energy."
let count = 5;
let intervalID;


intervalID = setInterval(()=>{
    count -= 1
    para.textContent = count;
    if(count === 0) {
        clearInterval(intervalID)
    }
}, 1000)

function displayMessage(string) {
    message.textContent = string;
    messageContainer.appendChild(message)
}
setTimeout(()=>{
    displayMessage(msg)
},5000)

// the setTimeout() function defines when a specific action should happen in milliseconds
// to prevent the setTimeout() form running we use the clearTimeout() method.

// the clearTimeout()
// -> the clearTimeout() method prevents the setTimeout() from running

// example

// const timeout = setTimeout(()=>{
//     displayMessage(msg)
// },4000)

// if(true) {
//    clearTimeout(timeout) 
// }