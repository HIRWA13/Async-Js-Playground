const allCities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const citiesContainer = document.getElementById('cities')

async function getCities () {
    const data = await fetch(allCities);
    const cities = await data.json();
    for(const el of cities) {
         const div = document.createElement('div')
         div.innerHTML = `<h2>${el.city}</h2> <span>is a city of</span> <h2>${el.state}</h2>`
         div.setAttribute('class', 'display__city')
         citiesContainer.appendChild(div)
    }
}

getCities();