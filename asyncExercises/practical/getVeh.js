/**
 * Use the async/await syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose Country is equal to "UNITED STATES (USA)"
 
 
 The API endpoint you should use is: https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2
 
 */

 const endpoint = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2'

 const fetchVehicle = async (url) => {
    const result = await fetch(endpoint)
    const data = await result.json()
    const vehicles = data.Results
    const myData = vehicles.filter(el => el.Country === 'UNITED STATES (USA)')

    return myData

    }

 fetchVehicle(endpoint)
    .then(val => console.log(val))