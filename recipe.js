import { navbar } from "./navbar.js";

const nav = document.getElementById('navbar');
nav.innerHTML = navbar()


const results = document.getElementById('results');



function searchFoodItems() {
  
    return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(
            (response) => response.json()
        ).then(
            (data) => {
                results.innerHTML = ''
                console.log(data)
                const item = data.meals[0]
                const img = document.createElement('img')
                img.src = `${item.strMealThumb}`
                img.style.height = '200px'
                img.style.width = '200px'
               
                const h1 = document.createElement('h3');
                h1.style.marginTop='15px'
                h1.innerHTML = item.strMeal;
                const p = document.createElement('p')
                p.innerHTML=`<strong>How to Make</strong>: ${item.strInstructions}`
                results.append(img, h1,p)
            }

        )

}

window.addEventListener('load',searchFoodItems)