/**
 * fetching from multiple endpoints:
 */

const urls = [
    'https://dummyjson.com/posts',
    'https://this-may-not-exist.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
]

const getFastPost = async (endpoints) => {
    const promisified = [];
   for(const url of endpoints) {
        promisified.push(fetch(url))
   }
   Promise.any(promisified)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getFastPost(urls);