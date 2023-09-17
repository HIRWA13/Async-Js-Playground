// write a js function that fetches data from an API and retiries the request a number of specified times if it fails:

async function fetchData(url, maxRetries, retryDelay) {
    for(let retry = 0; retry <= maxRetries; retry++) {
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            if(!response.ok) {
                throw new Error("failed to fetch the data")
            }
        }catch(err) {
            if(retry < maxRetries) {
                console.log('attempt to retry has failed')
                await new Promise((resolve)=> setTimeout(resolve, retryDelay))
            } else {
                throw Error;
            }
        }
    }
}

fetchData('https://api.github.com/user/HIRWA1', 3, 1000)