const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.responseText)
    } else {
        throw new Error('Could not fetch the data');
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send(); // we use the send() method to send the request to the server