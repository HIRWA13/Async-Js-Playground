// what is async/await?

// async/await is a new way to write asynchronous code. Previous options for were callbacks and promises but async functions gives us an easier and cleaner way to write our asynchronous code.

// async/await is built on top of promises. It cannot be used with plain callbacks.

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             reject("something went wrong")
//         }, 2000)
//     });
// }

// async function start2() {
//     try {
//         const result = await getData();
//         console.log(result)
//     } 
//     catch(err) {
//         console.log('ERROR: something is not right')
//     }
// }

// start2()

const imgContainer = document.getElementById("images")
async function start(){
    const data = await fetch("https://shibe.online/api/shibes?count=100");
    const result = await data.json();
    for(const item of result) {
        const div = document.createElement('div')
        div.setAttribute('class', 'img-container')
        const img = document.createElement('img')
        img.src = item;
        div.appendChild(img)
        imgContainer.appendChild(div)
    }
}
start();