// imitate the fetch function.

/**
 * the function should accept a url and an optional object
 * 
 * create a function called myFetch() that should work as a simple version of fetch() API
 */

const fetchMethods = {};


const myFetch = (url, method = 'GET') => {
    return new Promise((resolve, reject) => {
        // the promise should resolve with a response
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.responseText);
            } else {
              reject(new Error(`Request failed with status: ${xhr.status}`));
            }
          }
      }
      xhr.open(method, url)
      xhr.send()
    })
   
} 

myFetch('https://jsonplaceholder.typicode.com/todos')
    .then((val) => {
        // document.getElementById('root').innerHTML = val

        for(const el of val) {
            const div = document.createElement('div')
           div.textContent = el
           document.getElementById('root').innerHTML = el
        }
    })

console.log(myFetch())

/**
 * if(method === 'get') {
            
            const request = new XMLHttpRequest();
            request.open('GET', url, true)
        
            request.onreadystatechange = () => {
                if(request.readyState === 4) {
                    console.log(request.responseText)
                }
            }
            request.send();
       }
 */