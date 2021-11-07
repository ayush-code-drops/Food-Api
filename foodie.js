import { navbar } from "./navbar.js";

const nav = document.getElementById('navbar');
nav.innerHTML = navbar()

const inputbox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const results = document.getElementById('results');

searchBtn.addEventListener('click', searchFoodItems)

function searchFoodItems() {
  
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputbox.value}`)
        .then(
            (response) => response.json()
    ).then(
        (data) => {
results.innerHTML=''
            console.log(data)
            const item=data.meals[0]
            const img = document.createElement('img')
            img.src = `${item.strMealThumb}`
            img.style.height = '200px'
            img.style.width='200px'
            const h1 = document.createElement('h3');
            h1.innerHTML = item.strMeal;
            results.append(img,h1)
        }

    )
}