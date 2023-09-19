// const url = 'https://jsonplaceholder.typicode.com/todos';

// const myFetch = (endpoint, method = 'GET') => {
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//         request.open('get', endpoint, true);
//         request.onload = () => {
//          if(request.status === 200 && request.readyState === 4) {
//             resolve(request.responseText)
//          } 
//     }
//     request.send();
//     })
// }
// myFetch(url)
//     .then(val => console.log(val))
//     .catch(err => console.log('error in fetching'))



const controller = new AbortController();
const signal = controller.signal;
const url = 'https://jsonplaceholder.typicode.com/todos'
const cancelRequest = async (url) => {
    const result = await fetch(url, signal)

    setTimeout(() => {
        controller.abort()
    }, 3000);
}

cancelRequest(url)