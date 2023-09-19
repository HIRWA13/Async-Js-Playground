const urls = [
    'https://dummyjson.com/posts',
    'https://this-may-not-exist.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
]

const getFastPosts = async (links) => {
    const data = [];
    for (const link of links) {
        data.push(fetch(link))
    }

    const result = await Promise.any(data)
    console.log(result)
}

getFastPosts(urls)