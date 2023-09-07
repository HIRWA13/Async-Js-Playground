const foodies = "https://www.themealdb.com/api/json/v1/1/search.php?s";
const images = document.getElementById("images");

async function getFoods(){
    const data = await fetch(foodies)
    const foods = await data.json();
    for(const food of foods.meals) {
        console.log(food.strMealThumb)
    }
}
getFoods();