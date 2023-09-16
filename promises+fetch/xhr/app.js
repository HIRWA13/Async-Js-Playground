const url1 = "https://jsonplaceholder.typicode.com/todos/3";
const url2 = "https://jsonplaceholder.typicode.com/todos/1";
const url3 = "https://jsonplaceholder.typicode.com/todos/4";

const urls = [url1, url2, url3]

const returnedPromises = [];

for(const url of urls) {
  returnedPromises.push(fetch(url))
}

Promise.all(returnedPromises)
    .then((value) => {
      return  Promise.all(value.map((res) => res.json()))
    })
    .then((res) => console.log(res))