const WEATHER_URL = "https://handlers.education.launchcode.org/static/weather.json";

const weather = fetch(WEATHER_URL)

weather
    .then((res) => {
       try {
        if(res.ok === true) {
            return res.json()
        } else {
            throw Error("Something is Blocking the data", err)
        }
       } 
       catch(err) {
         throw Error("Can't fetch now", err)
       }
    })
    .then((data) => {
        document.getElementById("root").innerHTML = `
            <ul>
                <li>Temp: ${data.temp}</li>
                <li>Status: ${data.status}</li>
                <li>WindSpeed: ${data.windSpeed}</li>
                <li>CPT: ${data.chanceOfPrecipitation}</li>
            </ul>
        `
    })
