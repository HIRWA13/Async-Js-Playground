// XHR: XMLHttpRequest.

// http request is a request done by a client requesting data from somewhere

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=> {
    // console.log(request, request.readyState)
    if(request.readyState === 4) {
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();