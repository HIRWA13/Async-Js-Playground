function getWeather() {
    return new Promise((resolve, reject) => {
        resolve('sunny')
    })
}
const promise = getWeather();
promise.then(function(data){
    console.log(data)
})