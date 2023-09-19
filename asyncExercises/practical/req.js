/**
 * The function will accept two parameters: the URL of the API endpoint to send a request to and the number of seconds (in milliseconds) to delay the timer.

The desired behavior involves two possible outcomes:
- If the request successfully completes before the timer runs out, the function should cancel the timer and return the data obtained from the request.

- if the timer expires before the request finishes, the function should cancel the ongoing request and return an empty array.
 */

const getRequest = async (url, sec) => {
    let counter = 0


    const promise = await fetch(url)
    if(promise.status === 200 && sec > ) {
        const data = await promise.json()
    }
    const interval = setInterval(() => {
        counter++;
        
    }, sec * 1000)
}


